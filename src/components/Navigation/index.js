import React, { } from 'react';
import { Image, View, TouchableWithoutFeedback, Text } from 'react-native';
import { Images, colors, NavgationStyles } from '../../utils/theme';
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native'
let deviceWidth = Dimensions.get('window').width

function ProgressBar(props) {
    return (
        <View style={NavgationStyles.centerView}>
            <Progress.Bar progress={props.progress} height={5} style={{ marginLeft: 10 }} borderWidth={0} width={deviceWidth * 0.7} borderColor={colors.lightGary} unfilledColor={colors.lightGary} color={colors.black} />
        </View>
    );
}
function SkipButton(props) {
    const { navigation } = props;
    return (
        <View style={NavgationStyles.rightView}>
            {
                props.showskip ?
                    <TouchableWithoutFeedback onPress={() => navigation.skipButtonPress()}>
                        <Text style={NavgationStyles.skipText}>SKIP</Text>
                    </TouchableWithoutFeedback> : null
            }

        </View>
    );
}
function BackButton(props) {
    const { navigation } = props;
    return (
        <View style={NavgationStyles.rightView}>
            {
                props.showback ?
                    <TouchableWithoutFeedback onPress={() => navigation.backButtonPress()}>
                        <Image
                            source={Images.back_ic}
                            style={NavgationStyles.backButton} />
                    </TouchableWithoutFeedback> : null
            }
            <Text style={NavgationStyles.titleText}>{props.title}</Text>
        </View>
    );
}
function CrossButton(props) {
    const { navigation } = props;
    return (
        <View style={NavgationStyles.rightView}>
            {
                props.showback ?
                    <TouchableWithoutFeedback onPress={() => navigation.crossButtonPress()}>
                        <Image
                            source={Images.close}
                            style={NavgationStyles.crossButton} />
                    </TouchableWithoutFeedback> : null
            }
            <Text style={NavgationStyles.titleText}>{props.title}</Text>
        </View>
    );
}
function SearchButton(props) {
    const { navigation } = props;
    return (
        <View style={NavgationStyles.rightView}>
            {/* {
                props.showsearch ?
                    <TouchableWithoutFeedback onPress={() => navigation.searchButtonPress()}>
                        <Image
                            source={Images.bharat}
                            style={NavgationStyles.backButton} />
                    </TouchableWithoutFeedback> : null
            } */}

        </View>
    );
}


const setNavigation1 = (navigation, progress, showskip, showback) => {
    navigation.setOptions({
        headerTitle: props => <ProgressBar navigation={navigation} progress={progress} />,
        headerRight: props => <SkipButton navigation={navigation} showskip={showskip} ></SkipButton>,
        headerLeft: props => <BackButton navigation={navigation} showback={showback} ></BackButton>,
        headerLeft: props => <CrossButton navigation={navigation} showback={showback} ></CrossButton>,
         headerStyle: {
            backgroundColor: colors.white,
            borderBottomWidth: 0,
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0, elevation: 0

        },
        headerTintColor: colors.white,
        headerShown: true,
    })
}

const setNavigation2 = (navigation, showback, showsearch, title) => {
    navigation.setOptions({
        headerTitle: props => <View></View>,
        headerRight: props => <SearchButton navigation={navigation} showsearch={showsearch} ></SearchButton>,
        headerLeft: props => <BackButton navigation={navigation} title={title} showback={showback} ></BackButton>,
        headerStyle: {
            backgroundColor: colors.white,
            borderBottomWidth: 0.3,
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0, elevation: 0,
            // borderColor:"#EEF2F8"

        },
        headerTintColor: colors.white,
        headerShown: true,
    })
}


export default {
    setNavigation1,
    setNavigation2
};