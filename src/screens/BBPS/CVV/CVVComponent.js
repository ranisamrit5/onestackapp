import React, { memo, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput } from 'react-native';
import styles from './styles.js';
import Spinner from 'react-native-loading-spinner-overlay';
import { colors, sizes, fonts, Images } from '../../../utils/theme';
const CVVComponent = memo((props) => {
    let [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return (
        <View safe style={styles.container}>
            <Spinner visible={props.isLoading} />
            <SafeAreaView style={styles.safeContainer}>
                <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1, paddingBottom: 16 }} >
                

                 
                    <View style={styles.rowbox}>
                        <Text style={styles.titletextStyleSmall}>{"Recommended Offers"}</Text>
                        <Text style={styles.titletextStylesmall}>{"View All"}</Text>
                    </View>

                    <View style={styles.borderbox}>
                        <View style={styles.rowView}>
                            <Image style={styles.rowImageStyle} source={Images.power}></Image>
                            <Text onPress={() => props.go()} style={styles.rowtitletextStyle}>{"₹250 Off on first transactions using HDFC credit cards (up tp Rs 1000)"}</Text>
                        </View>
                    </View>
                    <View style={styles.rowbox}>
                        <Text style={styles.titletextStyleSmall}>{"UPI/Bank Accounts"}</Text>
                        <TouchableOpacity>
                            <Text style={styles.titletextStylesmall}>{"Add"}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.rowradioButton}>
                        <TouchableWithoutFeedback onPress={() => props.isAccpetData()}>
                            <Image style={styles.checkImage} source={props.isAccpet ? Images.checkedradiobutton : Images.uncheckedradiobutton} />
                        </TouchableWithoutFeedback>
                        <View style={styles.mainView}>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={styles.rowtitletextStyle}>{"HDFC Bank Ltd."}</Text>
                                <Text style={styles.smallrowtitletextStyle}>{"Savings A/c No.xxxx 6979"}</Text>
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Image style={styles.Image} source={Images.upi}></Image>
                               
                            </View>
                        </View>
                    </View>



                    <View style={styles.rowbox}>
                        <Text style={styles.titletextStyleSmall}>{"Credit/Debit Cards"}</Text>
                        <TouchableOpacity>
                            <Text style={styles.titletextStylesmall}>{"Add"}</Text>
                        </TouchableOpacity>
                    </View>

                 
                    <View style={styles.rowradioButton}>
                        <TouchableWithoutFeedback onPress={() => props.isAccpetData()}>
                            <Image style={styles.checkImage} source={props.isAccpet ? Images.checkedradiobutton : Images.uncheckedradiobutton} />
                        </TouchableWithoutFeedback>
                        <View style={styles.mainView}>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={styles.rowtitletextStyle}>{"HDFC Bank Ltd."}</Text>
                                <Text style={styles.smallrowtitletextStyle}>{"xxxx 6979"}</Text>
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Image style={styles.Image} source={Images.upi}></Image>
                                <Text style={styles.smallrowtitletextStyle}>{"Mahesh Shridhar"}</Text>
                            </View>
                        </View>
                    </View>


                    <View style={styles.buttonKey}>
                        <TouchableOpacity style={styles.Smallbutton}
                        // onPress={() => props.go()}
                        >
                            <TextInput
                                value={props.mobile}
                                maxLength={10}
                                autoFocus={true}
                                placeholder={"CVV"}
                                // onChangeText={(text) => {
                                //     props.setMobileData(text)
                                // }}
                                keyboardType={'number-pad'}
                                style={styles.textInput}
                            ></TextInput>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Continewbutton}
                            onPress={() => props.go()}
                        >
                            <Text style={styles.buttontext}>Pay Now</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>


        </View>
    );
});

export default CVVComponent;
