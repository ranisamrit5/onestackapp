

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BillPaymentComponent from './BillPaymentComponent';
import { Navigation, Images } from '../../../utils/theme';
const BillPaymentContainer = (props) => {
    const { navigation } = props;
    const [isLoading, setLoading] = React.useState(false);
    const [seletedTab, setSeletedTab] = React.useState(0);
    const setSeletedTabData = (value) => {
        setSeletedTab(value)
    }
    useEffect(() => {

    }, []);

    React.useLayoutEffect(() => {
        Navigation.setNavigation2(navigation, true, true, "Electricity Bill Payment")
        navigation.backButtonPress = () => {
            navigation.goBack()
        };
     
    });
    const go = () => {
        navigation.navigate('RecentBillContainor')
      };

    return (
        <BillPaymentComponent
            props={props}
            isLoading={isLoading}
            seletedTab={seletedTab}
            setSeletedTabData={setSeletedTabData}
            go={go}
        />
    );

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(BillPaymentContainer);

