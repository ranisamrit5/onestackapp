import React, { memo } from 'react';
import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
const LoginContainer = memo((props) => {
  const { navigation } = props;
  const [isLoading, setLoading] = React.useState(false);
  
  const go = () => {
    navigation.navigate('OnboardingmobileScreen')
  };
  return (
    <LoginComponent
      props={props}
      isLoading={isLoading}
      go={go}
    />
  );

});

LoginContainer.navigationOptions = {
  header: null,
};

const mapStateToProps = ({ }) => ({

});
const mapDispatchToProps = (dispatch) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
