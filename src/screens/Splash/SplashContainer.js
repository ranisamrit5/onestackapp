

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SplashComponent from './SplashComponent';
import SplashScreen from 'react-native-splash-screen';
import { store } from '../../redux/actions/store'

const SplashContainer = (props) => {

  useEffect(() => {
    SplashScreen.hide()
    const { navigation } = props;
    if (store.getState().common.isUserLoggedin) {
      navigation.navigate('DashBoard')
    } else {
      navigation.navigate('DashBoard')
      // navigation.navigate('Login')
    }
  }, []);

  return (
    <SplashComponent props={props} />
  );

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);

