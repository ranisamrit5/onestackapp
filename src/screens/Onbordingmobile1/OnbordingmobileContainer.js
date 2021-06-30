import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import { Navigation,Images } from '../../utils/theme';
import * as userActions from '../../redux/actions/userActions';
import { Validators } from '../../utils/validators';
import { ShowAlert, constants, ValidationMessages } from '../../utils/theme';
import OnbordingMobileComponent from './OnbordingMobileComponent';


const OnbordingmobileContainer = memo((props) => {
  const { navigation, apiSendOtp } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [mobile, setMobile] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("");
  const [countryImage, setCountryImage] = React.useState("");
  const setMobileData = (value) => {
    setMobile(value)
  };

  React.useEffect(() => {
    setCountryCode("+91")
    setCountryImage(Images.dummy2)
  }, []);



  React.useLayoutEffect(() => {
    Navigation.setNavigation1(navigation, 0.2, false, true)
    navigation.backButtonPress = () => {
    };
  });
  const showCountryList = () => {
    setShow(true)
  };
  const continueButtonPress = () => {
    if (checkValidation()) {
      apiSendOtpCall()
    }
  };
  const checkValidation = () => {
    if (Validators.isEmpty(mobile)) {
      ShowAlert(ValidationMessages.mobile_E_OnbordingmobileContainer)
      return false
    } else if (!constants.reg.regMobile.test(mobile)) {
      ShowAlert(ValidationMessages.mobile_V_OnbordingmobileContainer)
      return false
    } else {
      return true
    }
  }
  const apiSendOtpCall = async () => {
    var request = {
      "params": {
        "mobile": mobile
      },
      "signature": ""
    }
    console.log("apiSendOtp Request " + JSON.stringify(request));
    setLoading(true)
    await apiSendOtp(request)
      .then(response => {
        var data_response = response.payload.data;
        console.log("apiSendOtp Response " + JSON.stringify(data_response));
        var meta = data_response.meta;
        if (meta.status_code == 1) {
          setLoading(false)
          navigation.navigate('OnbordingOTPContainer', { data: { mobile: mobile } })
        } else {
          setLoading(false)
          ShowAlert(meta.status_message)
        }
      }).catch(error => {
        console.log(error);
        setLoading(false);
      });
  }

  const tAndCButtonPress = () => {
    console.log("tAndCButtonPress")
    Linking.openURL("https://stackoverflow.com/questions/43804032/open-url-in-default-web-browser")
      .catch(err => {
        console.error("Failed opening page because: ", err)
        alert('Failed to open page')
      })
  };
  const privcyPolicyButtonPress = () => {
    Linking.openURL("https://stackoverflow.com/questions/43804032/open-url-in-default-web-browser")
      .catch(err => {
        console.error("Failed opening page because: ", err)
        alert('Failed to open page')
      })
  };
  const onPress = (value) => {
    setShow(false)
    setCountryCode(value.code)
    setCountryImage(value.image)
  };
  return (
    <OnbordingMobileComponent
      props={props}
      mobile={mobile}
      show={show}
      showCountryList={showCountryList}
      countryCode={countryCode}
      countryImage={countryImage}
      setMobileData={setMobileData}
      isLoading={isLoading}
      continueButtonPress={continueButtonPress}
      privcyPolicyButtonPress={privcyPolicyButtonPress}
      tAndCButtonPress={tAndCButtonPress}
      onPress={onPress}
    />
  );

});

OnbordingmobileContainer.navigationOptions = {
  header: null,
};
const mapStateToProps = ({ }) => ({

});
const mapDispatchToProps = (dispatch) => ({
  apiSendOtp: (params) => dispatch(userActions.apiSendOtp(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OnbordingmobileContainer);
