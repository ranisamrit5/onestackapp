import React, { memo } from 'react';
import { View, SafeAreaView, ScrollView, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Commonstring, Images } from '../../utils/theme';
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Picker from '../../components/Picker';
const OnbordingMobileComponent = memo((props) => {
  const onPress = (value) => {
    props.onPress(value)
  };
  return (
    <View safe style={styles.container}>
      <Picker
        props={props}
        show={props.show}
        onPress={onPress}
      ></Picker>
      <Spinner visible={props.isLoading} />
      <SafeAreaView style={styles.safeContainer}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} style={styles.keyBordContainer}>
          <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1 }} >
            <View style={styles.subView}>
              <View style={{ flex: 1 }}>
                <Text style={styles.hedingText}>{Commonstring.need_Mobile}</Text>
                <View style={styles.textInputView}>
                  <Text style={styles.mobileText}>{"Mobile Number"}</Text>
                  <View style={styles.textInputViewRow}>
                    <TouchableOpacity style={styles.textInputViewRow} onPress={() => props.showCountryList()} >
                      <Image source={props.countryImage} style={styles.flagStyle}></Image>
                      <Text style={styles.countyCodeText}>{props.countryCode}</Text>
                    </TouchableOpacity>
                    <TextInput
                      value={props.mobile}
                      maxLength={10}
                      autoFocus={true}
                      onChangeText={(text) => {
                        props.setMobileData(text)
                      }}
                      keyboardType={'number-pad'}
                      style={styles.textInput}
                    ></TextInput>
                  </View>
                  <View style={styles.border}></View>
                </View>
              </View>

              <View style={{ flex: 0.1 }}>
                <Text style={styles.smallBlackText}>By continuing you agree to the
                  <Text onPress={() => props.tAndCButtonPress()} style={styles.smallBoldText}> terms & conditions </Text>and
                  <Text onPress={() => props.privcyPolicyButtonPress()} style={styles.smallBoldText}> privecy policy </Text>
                  of OneStack.
                </Text>

                <TouchableOpacity style={styles.button}
                  onPress={() => props.continueButtonPress()}>
                  <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>

                <Image source={Images.dummy1} style={styles.bottomImageStyle}></Image>
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
});

export default OnbordingMobileComponent;
