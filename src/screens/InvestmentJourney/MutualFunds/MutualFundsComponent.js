import React, { memo } from 'react';
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles.js';
import Spinner from 'react-native-loading-spinner-overlay';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { colors, sizes, fonts, Images } from '../../../utils/theme';
const MutualFundsComponent = memo((props) => {
    return (
        <View safe style={styles.container}>
            <Spinner visible={props.isLoading} />
            <SafeAreaView style={styles.safeContainer}>
                <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1,paddingBottom:16 }} >
                    <View style={styles.borderbox}>
                        <Text style={styles.textStyle}>{"Current Value"}</Text>
                        <View style={styles.rowView}>
                            <Text style={styles.textStyleRegular}>{"₹"}</Text>
                            <Text style={styles.textStyleSemiBold}>{"0"}</Text>
                        </View>
                        <Text style={styles.textStyleDesc}>{"Looks like we don’t have any of your investment data available with us."}</Text>
                        <TouchableOpacity style={styles.button}
                            onPress={() => props.continueButtonPress()}>
                            <Text style={styles.buttonText}>Add Existing Investments</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.seperatorView}></View>
                    <View style={styles.headerRow}>
                        <Text style={styles.titletextStyleSemiBold}>{"Funds With Best Returns"}</Text>
                        <Text style={styles.viewAlltextStyleSemiBold}>{"View All"}</Text>
                    </View>

                    <View style={styles.tabBack}>
                        <SegmentedControl
                            fontStyle={{ fontFamily: fonts.Medium, color: colors.mediumGray }}
                            activeFontStyle={{ fontFamily: fonts.Medium, color: colors.blackColor }}
                            tintColor={colors.whiteColor}
                            backgroundColor={colors.tabBackgroundColor}
                            values={['Equity', 'Debt', 'Others']}
                            selectedIndex={props.seletedTab}
                            onChange={(event) => {
                                props.setSeletedTabData(event.nativeEvent.selectedSegmentIndex);
                            }}
                        />

                    </View>
                    <View style={styles.borderbox}>
                        <View style={styles.rowView}>
                            <Image style={styles.rowImageStyle} source={Images.dummy4}></Image>
                            <Text style={styles.rowtitletextStyle}>{"Aditya Birla Sun Life Digital India Fund Direct - Growth"}</Text>
                        </View>
                        <View style={styles.rowseperatorView}></View>
                        <View style={styles.rowViewBack}>
                            <View style={{justifyContent:'flex-start'}}>
                                <Text style={styles.rowsubtitletextStyle}>{"Min. Invest"}</Text>
                                <Text style={styles.rowtitletextMediumStyle}>{"₹1,000"}</Text>
                            </View>
                            <View>
                                <Text style={styles.rowsubtitletextStyle}>{"Risk Level"}</Text>
                                <Text style={styles.rowtitletextMediumStyle}>{"High"}</Text>
                            </View>
                            <View style={{justifyContent:'flex-end'}}>
                                <Text style={styles.rowsubtitletextStyle}>{"3Y Returns"}</Text>
                                <Text style={styles.rowtitletextMediumStyleGreen}>{"+ 28.22%"}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.borderbox}>
                        <View style={styles.rowView}>
                            <Image style={styles.rowImageStyle} source={Images.dummy4}></Image>
                            <Text style={styles.rowtitletextStyle}>{"Aditya Birla Sun Life Digital India Fund Direct - Growth"}</Text>
                        </View>
                        <View style={styles.rowseperatorView}></View>
                        <View style={styles.rowViewBack}>
                            <View style={{justifyContent:'flex-start'}}>
                                <Text style={styles.rowsubtitletextStyle}>{"Min. Invest"}</Text>
                                <Text style={styles.rowtitletextMediumStyle}>{"₹1,000"}</Text>
                            </View>
                            <View>
                                <Text style={styles.rowsubtitletextStyle}>{"Risk Level"}</Text>
                                <Text style={styles.rowtitletextMediumStyle}>{"High"}</Text>
                            </View>
                            <View style={{justifyContent:'flex-end'}}>
                                <Text style={styles.rowsubtitletextStyle}>{"3Y Returns"}</Text>
                                <Text style={styles.rowtitletextMediumStyleGreen}>{"+ 28.22%"}</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>


        </View>
    );
});

export default MutualFundsComponent;
