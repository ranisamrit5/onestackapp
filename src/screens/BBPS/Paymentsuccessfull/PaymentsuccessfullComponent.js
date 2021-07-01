import React, { memo, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput } from 'react-native';
import styles from './styles.js';
import Spinner from 'react-native-loading-spinner-overlay';
import { colors, sizes, fonts, Images } from '../../../utils/theme';
const PaymentsuccessfullComponent = memo((props) => {
    let [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return (
        <View safe style={styles.container}>
            <Spinner visible={props.isLoading} />
            <SafeAreaView style={styles.safeContainer}>
                <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1, paddingBottom: 16 }} >
                    <View style={styles.rowbox}>
                    <Image
                            source={Images.success}
                            style={styles.Img} />
                          <Text style={styles.Large_Text}>{"₹2560"}</Text>
                          <Text style={styles.regularMidium_Text}>{"Your payment was successfull"}</Text>
                    </View>

                    <View style={styles.hadertext}>
                        <Text style={styles.titletextStyleSmall}>{"Paid To"}</Text>
                      
                    </View>

                    <View style={styles.borderbox}>
                        <View style={styles.rowView}>
                            <Image style={styles.rowImageStyle} source={Images.power}></Image>
                            <Text onPress={() => props.go()} style={styles.rowtitletextStyle}>{"Central Power Distribution Corporation"}</Text>
                        </View>
                    </View>
                    <View style={styles.hadertext}>
                        <Text style={styles.titletextStyleSmall}>{"Transferred From"}</Text>
                      
                    </View>
                    <View style={styles.borderbox}>
                        <View style={styles.rowView}>
                            <Image style={styles.rowImageStyle} source={Images.power}></Image>
                            <View style={{ flexDirection: "column" }}>
                            <Text  style={styles.rowtitletextStyle}>{"ICICI Credit Card"}</Text>
                            <Text  style={styles.rowtitletextStylesmall}>{"XXXX 5638"}</Text>
                        </View>
                        </View>
                    </View>
                    <View style={styles.hadertext}>
                        <Text style={styles.titletextStyleSmall}>{"Transaction ID"}</Text>
                        <Text  style={styles.rowtitletextStylemedium}>{"119201393628"}</Text>
                            <Text  style={styles.rowtitletextStyleSmall}>{"05:23 PM,20 May 2021"}</Text>
                    </View>
                    <TouchableOpacity style={styles.Continewbutton}
                            onPress={() => props.go()}
                        >
                            <Text style={styles.buttontext}>Done</Text>
                        </TouchableOpacity>

                 
                 
                   
                    

                 
               

                </ScrollView>
            </SafeAreaView>


        </View>
    );
});

export default PaymentsuccessfullComponent;
