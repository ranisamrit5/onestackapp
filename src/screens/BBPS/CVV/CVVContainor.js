

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CVVComponent from './CVVComponent';
import { Navigation, Images } from '../../../utils/theme';
const CVVContainor = (props) => {
    const { navigation } = props;
    const [isLoading, setLoading] = React.useState(false);
    const [seletedTab, setSeletedTab] = React.useState(0);
    const setSeletedTabData = (value) => {
        setSeletedTab(value)
    }
    useEffect(() => {

    }, []);

    React.useLayoutEffect(() => {
        Navigation.setNavigation2(navigation, true, true, "Payment Options")
        navigation.backButtonPress = () => {
            navigation.goBack()
        };
        navigation.searchButtonPress = () => {
            navigation.goBack()
        };
    });
    const go = () => {
        navigation.navigate('PaymentsuccessfullContainor')
      };
 const [isAccpet, setAccept] = React.useState(false);
  const isAccpetData = () => {
    setAccept(!isAccpet)
  }

    return (
        <CVVComponent
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
export default connect(mapStateToProps, mapDispatchToProps)(CVVContainor);

