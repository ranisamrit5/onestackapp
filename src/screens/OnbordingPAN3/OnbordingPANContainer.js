import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../../utils/theme';
import * as userActions from '../../redux/actions/userActions';
import * as commonAction from '../../redux/actions/commonAction';
import { store } from '../../redux/actions/store'
import { Validators } from '../../utils/validators';
import { ShowAlert, constants, ValidationMessages } from '../../utils/theme';
import OnbordingPANComponent from './OnbordingPANComponent';
const OnbordingPANContainer = memo((props) => {
  const { navigation, apiVerifyPan,apiUpdatePan,saveUserData } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [pan, setPan] = React.useState("");
  const [fulName, setFulName] = React.useState("");
  const setPanData = (value) => {
    setPan(value)
  };
  const [isAccpet, setAccept] = React.useState(false);
  const isAccpetData = () => {
    setAccept(!isAccpet)
  }

  React.useLayoutEffect(() => {
    Navigation.setNavigation1(navigation, 0.6, true, true)
    navigation.backButtonPress = () => {
      navigation.goBack()
    };
    navigation.skipButtonPress = () => {
      navigation.navigate('OnbordingEmailContainer')
    };
  });

  const VerifyButtonPress = () => {
    if (checkValidation()) {
      apiVerifyPanCall()
    }
  };
  const checkValidation = () => {
    if (Validators.isEmpty(pan)) {
      ShowAlert(ValidationMessages.pan_E_OnbordingPANContainer)
      return false
    } else if (!constants.reg.regPan.test(pan)) {
      ShowAlert(ValidationMessages.pan_V_OnbordingPANContainer)
      return false
    } else if (!isAccpet) {
      ShowAlert(ValidationMessages.box_V_OnbordingPANContainer)
      return false
    } else {
      return true
    }
  }

  const apiVerifyPanCall = async () => {
    const object = store.getState().common;
    console.log(object)
    var request = {
      "params": {
        "pan": pan,
        "userId": object?.userData?.user_id
      },
      "signature": ""
    }
    console.log("apiVerifyPan Request " + JSON.stringify(request));
    setLoading(true)
    await apiVerifyPan(request)
      .then(response => {
        var data_response = response.payload.data;
        console.log("apiVerifyOtp Response " + JSON.stringify(data_response));
        var meta = data_response.meta;
        var data = data_response.data;
        if (meta.status_code == 1) {
          setLoading(false)
          var params = data.params
          setFulName(`${params.first_name} ${params.last_name}`.toUpperCase())
          saveUserData({userData:{user_id:object?.userData?.user_id,first_name:params.first_name,last_name:params.last_name}})
          setShow(true)
        } else {
          setLoading(false)
          ShowAlert(meta.status_message)
        }
      }).catch(error => {
        console.log(error);
        setLoading(false);
      });
  }
  const apiUpdatePanCall = async () => {
    const object = store.getState().common;
    console.log(object)
    var request = {
      "params": {
        "pan": pan,
        "userId": object?.userData?.user_id
      },
      "signature": ""
    }
    console.log("apiUpdatePan Request " + JSON.stringify(request));
    setLoading(true)
    await apiUpdatePan(request)
      .then(response => {
        var data_response = response.payload.data;
        console.log("apiUpdatePan Response " + JSON.stringify(data_response));
        var meta = data_response.meta;
        if (meta.status_code == 1) {
          setLoading(false)
          navigation.navigate('OnbordingEmailContainer')
        } else {
          setLoading(false)
          ShowAlert(meta.status_message)
        }
      }).catch(error => {
        console.log(error);
        setLoading(false);
      });
  }

  const impactButtonPress = () => {
    console.log("impactButtonPress")
  };
  const confirmButtonPress = () => {
    apiUpdatePanCall()
  };
  const reEnterPanButtonPress = () => {
    console.log("reEnterPanButtonPress")
    setShow(false)
  };
  return (
    <OnbordingPANComponent
      props={props}
      isAccpetData={isAccpetData}
      isAccpet={isAccpet}
      show={show}
      setPanData={setPanData}
      pan={pan}
      fulName={fulName}
      isLoading={isLoading}
      VerifyButtonPress={VerifyButtonPress}
      impactButtonPress={impactButtonPress}
      confirmButtonPress={confirmButtonPress}
      reEnterPanButtonPress={reEnterPanButtonPress}
    />
  );

});

OnbordingPANContainer.navigationOptions = {
  header: null,
};

const mapStateToProps = ({ }) => ({

});
const mapDispatchToProps = (dispatch) => ({
  apiVerifyPan: (params) => dispatch(userActions.apiVerifyPan(params)),
  apiUpdatePan: (params) => dispatch(userActions.apiUpdatePan(params)),
  saveUserData: (params) => dispatch(commonAction.saveUserData(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OnbordingPANContainer);
