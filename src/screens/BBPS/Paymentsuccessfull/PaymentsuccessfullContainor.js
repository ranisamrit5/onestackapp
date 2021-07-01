

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PaymentsuccessfullComponent from './PaymentsuccessfullComponent';
import { Navigation, Images } from '../../../utils/theme';
const PaymentsuccessfullContainor = (props) => {
    const { navigation } = props;
    const [isLoading, setLoading] = React.useState(false);
    const [seletedTab, setSeletedTab] = React.useState(0);
    const setSeletedTabData = (value) => {
        setSeletedTab(value)
    }
    useEffect(() => {

    }, []);

    React.useLayoutEffect(() => {
        Navigation.setNavigation2(navigation, true, true, )
        navigation.backButtonPress = () => {
            navigation.goBack()
        };
        navigation.searchButtonPress = () => {
            navigation.goBack()
        };
    });
    const go = () => {
        navigation.navigate('RecurringuserContainor')
      };
 const [isAccpet, setAccept] = React.useState(false);
  const isAccpetData = () => {
    setAccept(!isAccpet)
  }

    return (
        <PaymentsuccessfullComponent
            props={props}
            isLoading={isLoading}
            seletedTab={seletedTab}
            setSeletedTabData={setSeletedTabData}
            isAccpetData={isAccpetData}
            go={go}
        />
    );

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(PaymentsuccessfullContainor);

