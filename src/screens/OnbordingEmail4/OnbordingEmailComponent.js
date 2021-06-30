import React, {  } from 'react';
import { View, SafeAreaView, ScrollView, Text, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { Commonstring, Images } from '../../utils/theme';
import Spinner from 'react-native-loading-spinner-overlay';
const OnboardingEmailComponent = (props) => {

    return (
        <View safe style={styles.container}>
        <Spinner visible={props.isLoading} />
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flex: 1 }} >
                <View style={styles.subView}>
                    <View style={{ flex: 1 }}>
                    
                        <Text style={styles.hedingText}>{`${props.fullName}, What's your Email ID?`}</Text>
                        <View style={styles.textInputView}>
                            <Text style={styles.text}>{"We’ll only share important financial information here"}</Text>
                            <View style={styles.textInputViewRow}>
                                <TextInput
                                    placeholder={"Email Id"}
                                    value={props.email}
                                    onChangeText={(text) => {
                                        props.setEmailData(text)
                                    }}
                                    keyboardType={'email-address'}
                                    style={styles.textInput}
                                ></TextInput>
                            </View>
                            <View style={styles.border}></View>
                        </View>
                    </View>
                    <View style={{ flex: 0.65 }}>
                        <View>
                            <TouchableOpacity style={styles.button}
                                onPress={() => props.ContinueButtonPress()}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    </View>
    );
};

export default OnboardingEmailComponent;

