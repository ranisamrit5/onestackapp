import React, { memo, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles.js';
import Spinner from 'react-native-loading-spinner-overlay';
import { colors, sizes, fonts, Images } from '../../../utils/theme';
const BillDetailsComponent = memo((props) => {
    let [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return (
        <View safe style={styles.container}>
            <Spinner visible={props.isLoading} />
            <SafeAreaView style={styles.safeContainer}>
                <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1, paddingBottom: 16 }} >
                    <View style={{ flex: 1 }}>

                        <View style={styles.textInputView}>
                            <Text style={styles.mobileText}>{"Cousumer Number"}</Text>
                            <View style={styles.textInputViewRow}>
                                <TouchableOpacity style={styles.textInputViewRow} onPress={() => props.showCountryList()} >
                                    <Image source={props.countryImage} style={styles.flagStyle}></Image>
                                    <Text style={styles.countyCodeText}>{props.countryCode}</Text>
                                </TouchableOpacity>
                                <TextInput
                                    value={props.mobile}
                                    placeholder={" Find Consumer Number"}
                                    //   maxLength={10}
                                    //   autoFocus={true}
                                    //   onChangeText={(text) => {
                                    //     props.setMobileData(text)
                                    //   }}
                                    keyboardType={'number-pad'}
                                    style={styles.textInput}
                                ></TextInput>

                            </View>
                            <Text style={styles.mobiletext}>{"Please enter your 9-12 digit Cousumer Number (Eg.010000008564)"}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}
                      onPress={() => props.go()}
                    >
                        <Text style={styles.buttonText}>Get Bill Details</Text>
                    </TouchableOpacity>




                </ScrollView>
            </SafeAreaView>


        </View>
    );
});

export default BillDetailsComponent;
