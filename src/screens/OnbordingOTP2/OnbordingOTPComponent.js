import React, { memo } from 'react';
import { View, SafeAreaView, ScrollView, Text, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { Commonstring, Images } from '../../utils/theme';
import Spinner from 'react-native-loading-spinner-overlay';

const OnboardingOTPComponent = (props) => {

  return (
    <View safe style={styles.container}>
      <Spinner visible={props.isLoading} />
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flex: 1 }} >
          <View style={styles.subView}>
            <View style={{ flex: 1 }}>
              <Text style={styles.hedingText}>{Commonstring.sent_OTP}</Text>
              <View style={styles.textInputView}>
                <Text style={styles.text}>{"Enter 6 digit OTP sent to "}<Text style={styles.textBlack}>{props.mobile + " "}</Text>
                  <TouchableWithoutFeedback style={{ top: 15, marginLeft: 5 }} onPress={() => props.editButtonPress()}>
                    <Image
                      source={Images.pencil}
                      style={styles.edit} />
                  </TouchableWithoutFeedback></Text>
                <View style={styles.textInputViewRow}>
                  <TextInput
                    placeholder={"Enter OTP"}
                    value={props.otp}
                    maxLength={6}
                    autoFocus={true}
                    onChangeText={(text) => {
                      props.setOtpData(text)
                    }}
                    keyboardType={'number-pad'}
                    style={styles.textInput}
                  ></TextInput>
                </View>
                <View style={styles.border}></View>
              </View>
            </View>
            <View style={{ flex: 0.65 }}>
              <View style={styles.buttonsRow}>
                <TouchableOpacity style={styles.buttonGetotp}
                  onPress={() => props.resendOTPButtonPress()}>
                  <Text style={styles.buttonTextBlack}>{props.timeLeft==0 ? "Resend OTP" : `Resend OTP in ${props.timeLeft>9?"":"0"} ${props.timeLeft}`}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGetcall}
                  onPress={() => props.GetCallButtonPress()}>
                  <Text style={styles.buttonTextBlack}>Get OTP via call</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button}
                  onPress={() => props.VerifyButtonPress()}>
                  <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </View>

  );
};

export default OnboardingOTPComponent;

