

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BillDetailsComponent from './BillDetailsComponent';
import { Navigation, Images } from '../../../utils/theme';
const BillDetailsContainor = (props) => {
    const { navigation } = props;
    const [isLoading, setLoading] = React.useState(false);
    const [seletedTab, setSeletedTab] = React.useState(0);
    const setSeletedTabData = (value) => {
        setSeletedTab(value)
    }
    useEffect(() => {

    }, []);

    React.useLayoutEffect(() => {
        Navigation.setNavigation2(navigation, true, true, "Central Power Distribution...")
        navigation.backButtonPress = () => {
            navigation.goBack()
        };
        navigation.searchButtonPress = () => {
            navigation.goBack()
        };
    });
    const go = () => {
        navigation.navigate('RecentBillContainor')
      };

    return (
        <BillDetailsComponent
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
export default connect(mapStateToProps, mapDispatchToProps)(BillDetailsContainor);

