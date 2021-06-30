import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../../utils/theme';
import * as userActions from '../../redux/actions/userActions';
import { store } from '../../redux/actions/store'
import { Validators } from '../../utils/validators';
import { ShowAlert, constants, ValidationMessages } from '../../utils/theme';
import OnbordingEmailComponent from './OnbordingEmailComponent';
const OnbordingEmailContainer = memo((props) => {
  const { navigation, apiSaveEmail } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const setEmailData = (value) => {
    setEmail(value)
  };
  React.useEffect(() => {
    const object = store.getState().common;
    setFullName(`${object.userData?.first_name} ${object.userData?.last_name}`)
  });


  React.useLayoutEffect(() => {
    Navigation.setNavigation1(navigation, 0.8, true, true)
    navigation.backButtonPress = () => {
      navigation.goBack()
    };
    navigation.skipButtonPress = () => {
      navigation.navigate('OnbordingAllSetContainer')
    };
  });

  const ContinueButtonPress = () => {
    if (checkValidation()) {
      apiSaveEmailCall()
    }
  };
  const checkValidation = () => {
    if (Validators.isEmpty(email)) {
      ShowAlert(ValidationMessages.email_E_OnbordingEmailContainer)
      return false
    } else if (!constants.reg.regEmail.test(email)) {
      ShowAlert(ValidationMessages.email_V_OnbordingEmailContainer)
      return false
    } else {
      return true
    }
  }

  const apiSaveEmailCall = async () => {
    const object = store.getState().common;
    console.log(object)
    var request = {
      "params": {
        "email": email,
        "userId": object?.userData?.user_id
      },
      "signature": ""
    }
    console.log("apiSaveEmail Request " + JSON.stringify(request));
    setLoading(true)
    await apiSaveEmail(request)
      .then(response => {
        var data_response = response.payload.data;
        console.log("apiSaveEmail Response " + JSON.stringify(data_response));
        var meta = data_response.meta;
        if (meta.status_code == 1) {
          setLoading(false)
          navigation.navigate('OnbordingAllSetContainer')
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
    <OnbordingEmailComponent
      props={props}
      fullName={fullName}
      email={email}
      setEmailData={setEmailData}
      isLoading={isLoading}
      ContinueButtonPress={ContinueButtonPress}
    />
  );

});

OnbordingEmailContainer.navigationOptions = {
  header: null,
};

const mapStateToProps = ({ }) => ({

});
const mapDispatchToProps = (dispatch) => ({
  apiSaveEmail: (params) => dispatch(userActions.apiSaveEmail(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OnbordingEmailContainer);
