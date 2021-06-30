import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../../utils/theme';
import * as userActions from '../../redux/actions/userActions';
import * as commonAction from '../../redux/actions/commonAction';
import { Validators } from '../../utils/validators';
import { ShowAlert, constants, ValidationMessages } from '../../utils/theme';
import OnbordingOTPComponent from './OnbordingOTPComponent';
const OnbordingOTPContainer = memo((props) => {
  const { navigation, apiReSendOtp, apiVerifyOtp,setUserSession,saveUserData } = props;
  const { data } = props.route.params;
  const [isLoading, setLoading] = React.useState(false);
  const [mobile, setMobile] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [timeLeft, setTimeLeft] = React.useState(30);

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(timer);
        return false;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000)
  }

  React.useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  const start = () => {
    setTimeLeft(30);
    clearTimeout(timer);
    startTimer();
  }

  const setOtpData = (value) => {
    setOtp(value)
  };
  React.useEffect(() => {
    setMobile(data.mobile)
  }, []);
  React.useLayoutEffect(() => {
    Navigation.setNavigation1(navigation, 0.4, false, true)
    navigation.backButtonPress = () => {
      navigation.goBack()
    };
  });

  const editButtonPress = () => {
    navigation.goBack()
  };
  const VerifyButtonPress = () => {
    if (checkValidation()) {
      apiVerifyOtpCall()
    }
  };
  const checkValidation = () => {
    if (Validators.isEmpty(otp)) {
      ShowAlert(ValidationMessages.otp_E_OnbordingOTPContainer)
      return false
    } else {
      return true
    }
  }
  const resendOTPButtonPress = () => {
    if(timeLeft==0){
      start()
      apiReSendOtpCall()
    }
    
  };
  const GetCallButtonPress = () => {
    console.log("GetCallButtonPress")
  };

  const apiReSendOtpCall = async () => {
    var request = {
      "params": {
        "mobile": mobile
      },
      "signature": ""
    }
    console.log("apiReSendOtp Request " + JSON.stringify(request));
    setLoading(true)
    await apiReSendOtp(request)
      .then(response => {
        var data_response = response.payload.data;
        console.log("apiReSendOtp Response " + JSON.stringify(data_response));
        var meta = data_response.meta;
        if (meta.status_code == 1) {
          setLoading(false)
          ShowAlert(meta.status_message)
        } else {
          setLoading(false)
          ShowAlert(meta.status_message)
        }
      }).catch(error => {
        console.log(error);
        setLoading(false);
      });
  }
  const apiVerifyOtpCall = async () => {
    var request = {
      "params": {
        "mobile": mobile,
        "otp": otp
      },
      "signature": ""
    }
    console.log("apiVerifyOtp Request " + JSON.stringify(request));
    setLoading(true)
    await apiVerifyOtp(request)
      .then(response => {
        var data_response = response.payload.data;
        console.log("apiVerifyOtp Response " + JSON.stringify(data_response));
        var meta = data_response.meta;
        var data = data_response.data;
        if (meta.status_code == 1) {
          setLoading(false)
          var params = data.params
          saveUserData({userData:{user_id:params.user_id}})
          if(params.is_new_user == 0){
            setUserSession()
            navigation.navigate('DashBoard')
          }else{
            navigation.navigate('OnbordingPANContainer')
          }
        } else {
          setLoading(false)
          ShowAlert(meta.status_message)
        }
      }).catch(error => {
        console.log(error);
        setLoading(false);
      });
  }
  return (
    <OnbordingOTPComponent
      props={props}
      setOtpData={setOtpData}
      otp={otp}
      timeLeft={timeLeft}
      mobile={mobile}
      isLoading={isLoading}
      editButtonPress={editButtonPress}
      VerifyButtonPress={VerifyButtonPress}
      resendOTPButtonPress={resendOTPButtonPress}
      GetCallButtonPress={GetCallButtonPress}
    />
  );

});

OnbordingOTPContainer.navigationOptions = {
  header: null,
};

const mapStateToProps = ({ }) => ({

});
const mapDispatchToProps = (dispatch) => ({
  apiReSendOtp: (params) => dispatch(userActions.apiReSendOtp(params)),
  apiVerifyOtp: (params) => dispatch(userActions.apiVerifyOtp(params)),
  saveUserData: (params) => dispatch(commonAction.saveUserData(params)),
  setUserSession: () => dispatch(commonAction.setUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(OnbordingOTPContainer);
