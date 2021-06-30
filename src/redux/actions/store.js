

import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { multiClientMiddleware } from 'redux-axios-middleware';
import axios from 'axios';
import reducers, { persistWhitelist } from '../reducers';
const middleware = [];
axios.defaults.timeout = 1000;
const defaultClient = axios.create({
  baseURL: "https://test.onestack.in/",
  responseType: 'json',
});

defaultClient.interceptors.request.use((config) => {
  const { token } = store.getState().userSession;
  if (token) {
    Object.assign(config, {
      headers: {
        Authorization: `${token}`,
      },
    });
  }
  return config;
});

const clients = {
  default: {
    client: defaultClient,
  },
};

const axiosMiddleware = multiClientMiddleware(clients, {
  returnRejectedPromiseOnError: true,
  interceptors: {
    response: [
      {
        error: ({ dispatch }, error) => {
          if (error.response && error.response.status === 401) {
            //Error while api call
          }
          return Promise.reject(error);
        },
      },
    ],
  },
});

middleware.push(thunk);
middleware.push(axiosMiddleware);

if (__DEV__) {
  const { createLogger } = require('redux-logger');
  const loggerConfig = {
    collapsed: (getState, action, logEntry) => !logEntry.error,
    duration: true,
    diff: true,
  };
  const loggerMiddleware = createLogger(loggerConfig);
  middleware.push(loggerMiddleware);
}

const persistConfig = {
  version: 0,
  key: 'root',
  storage: AsyncStorage,
  whitelist: persistWhitelist,
  timeout: 10,
};


const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  __DEV__
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
