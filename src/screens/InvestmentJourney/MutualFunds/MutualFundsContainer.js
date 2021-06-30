

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MutualFundsComponent from './MutualFundsComponent';
import { Navigation, Images } from '../../../utils/theme';
const MutualFundsContainer = (props) => {
    const { navigation } = props;
    const [isLoading, setLoading] = React.useState(false);
    const [seletedTab, setSeletedTab] = React.useState(0);
    const setSeletedTabData = (value) => {
        setSeletedTab(value)
    }
    useEffect(() => {

    }, []);

    React.useLayoutEffect(() => {
        Navigation.setNavigation2(navigation, true, true, "Mutual Funds")
        navigation.backButtonPress = () => {
            navigation.goBack()
        };
        navigation.searchButtonPress = () => {
            navigation.goBack()
        };
    });
     

    return (
        <MutualFundsComponent
            props={props}
            isLoading={isLoading}
            seletedTab={seletedTab}
            setSeletedTabData={setSeletedTabData}

        />
    );

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(MutualFundsContainer);

