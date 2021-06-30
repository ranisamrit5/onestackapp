import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../../utils/theme';
import * as commonAction from '../../redux/actions/commonAction';
import OnbordingAllSetComponent from './OnbordingAllSetComponent';

const OnbordingAllSetContainer = memo((props) => {
  const { navigation, setUserSession } = props;
  const [isLoading, setLoading] = React.useState(false);

  React.useLayoutEffect(() => {
    Navigation.setNavigation1(navigation, 1.0, false, true)
    navigation.backButtonPress = () => {
    };
  });

  const GetstartedButtonPress = () => {
    setUserSession()
    navigation.navigate('DashBoard')
  };
  return (
    <OnbordingAllSetComponent
      props={props}
      isLoading={isLoading}
      GetstartedButtonPress={GetstartedButtonPress}
    />
  );

});

OnbordingAllSetContainer.navigationOptions = {
  header: null,
};
const mapStateToProps = ({ }) => ({

});
const mapDispatchToProps = (dispatch) => ({
  setUserSession: () => dispatch(commonAction.setUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(OnbordingAllSetContainer);
