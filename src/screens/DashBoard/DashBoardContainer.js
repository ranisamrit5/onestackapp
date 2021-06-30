import React, { memo} from 'react';
import { connect } from 'react-redux';
import DashBoardComponent from './DashBoardComponent';
import * as commonAction from '../../redux/actions/commonAction';
const DashBoardContainer = memo((props) => {

  const { navigation,clearUserSession } = props;
  
  const [isLoading, setLoading] = React.useState(false);

  const logoutButtonPress = () => {
    clearUserSession()
    navigation.navigate('Login1')
  };
  const investmentButtonPress = () => {
    clearUserSession()
    navigation.navigate('MutualFundsContainer')
  };
  const bbpsButtonPress = () => {
    clearUserSession()
    navigation.navigate('BillPaymentContainer')
  };
  

  return (
    <DashBoardComponent
      props={props}
      isLoading={isLoading}
      logoutButtonPress={logoutButtonPress}
      investmentButtonPress={investmentButtonPress}
      bbpsButtonPress={bbpsButtonPress}
    />
  );

});

DashBoardContainer.navigationOptions = {
  header: null,
};

const mapStateToProps = ({ }) => ({

});
const mapDispatchToProps = (dispatch) => ({
  clearUserSession: () => dispatch(commonAction.clearUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer);
