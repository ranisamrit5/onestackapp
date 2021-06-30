import React, {  } from 'react';
import { View, SafeAreaView, ScrollView, Text, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { Commonstring, Images } from '../../utils/theme';
import Spinner from 'react-native-loading-spinner-overlay';
import * as Animatable from 'react-native-animatable';
const OnboardingPANComponent = (props) => {

    return (
        <View safe style={styles.container}>
            <Spinner visible={props.isLoading} />
            <SafeAreaView style={styles.safeContainer}>
                <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flex: 1 }} >
                    <View style={styles.subView}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.hedingText}>{Commonstring.msg_PAN}</Text>
                            <View style={styles.textInputView}>
                                <Text style={styles.text}>{"This will help us curate your financial dashboard"}</Text>
                                <View style={styles.textInputViewRow}>
                                    <TextInput
                                        placeholder={"ABCDE1234F"}
                                        value={props.pan}
                                        maxLength={10}
                                        // autoFocus={true}
                                        onChangeText={(text) => {
                                            props.setPanData(text)
                                        }}
                                        autoCapitalize={'characters'}
                                        style={styles.textInput}
                                    ></TextInput>
                                </View>
                                <View style={styles.border}></View>
                            </View>
                        </View>
                        <View style={{ flex: 0.65 }}>
                            <View style={styles.rowView}>
                                <TouchableWithoutFeedback onPress={() => props.isAccpetData()}>
                                    <Image style={styles.checkImage} source={props.isAccpet ? Images.checked : Images.uncheck} />
                                </TouchableWithoutFeedback>
                                <Text style={styles.smallBlackText}>You agree OneStack to check your credit information with RBI approved credit bureaus.
                                    <Text onPress={() => props.impactButtonPress()} style={styles.smallBoldText}> This will not impact your credit score </Text>
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => props.VerifyButtonPress()}>
                                    <Text style={styles.buttonText}>Verify PAN</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
            {
                props.show ?
                    <View style={{opacity: 0.7, height: 5000, width: 4000, position: 'absolute', backgroundColor: 'black' }}></View> : null
            }
            {
                props.show ? <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>
                    <View>
                        <Text style={styles.regularBlackText}>Hello,<Text style={styles.regularBoldText}>{` ${props.fulName}`}</Text></Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonPopup}
                            onPress={() => props.confirmButtonPress()}>
                            <Text style={styles.buttonText}>{`CONFIRM,I AM ${props.fulName}`}</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text onPress={() => props.reEnterPanButtonPress()} style={styles.textCenter}>Wrong Name? Re-enter your PAN</Text>
                    </View>
                </Animatable.View> : null
            }


        </View>
    );
};

export default OnboardingPANComponent;







