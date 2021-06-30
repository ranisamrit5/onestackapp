import React, { memo } from 'react';
import { View, SafeAreaView, ScrollView, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Commonstring, Images } from '../../utils/theme';
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const OnbordingAllSetComponent = memo((props) => {
  return (
    <View safe style={styles.container}>
      <Spinner visible={props.isLoading} />
      <SafeAreaView style={styles.safeContainer}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} style={styles.keyBordContainer}>
          <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1 }} >
            <View style={styles.subView}>
              <View style={{ flex: 1 }}>
                <Text style={styles.hedingText}>{"Awesome, you’re all set!"}</Text>
                <Text style={styles.text}>{"Before you get started, here’s your current credit report."}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.keyTextB}>{"KEY INSIGHTS"}</Text>
                <View style={styles.rowView}>
                  <Image style={styles.checkImage} source={Images.uncheck} />
                  <View style={styles.columnView}>
                    <Text style={styles.keyTextR}>{"Pay your bills on time"}</Text>
                    <Text style={styles.keyTextS}>{"You missed your last bill payment by 5 days"}</Text>
                  </View>
                </View>
                <View style={styles.rowView}>
                  <Image style={styles.checkImage} source={Images.uncheck} />
                  <View style={styles.columnView}>
                    <Text style={styles.keyTextR}>{"Don’t utilise more than 30% of your credit limit"}</Text>
                    <Text style={styles.keyTextS}>{"Great! You are consistently averaging less than 30%"}</Text>
                  </View>
                </View>


              </View>
              <View style={{ flex: 0.1 }}>
                <TouchableOpacity style={styles.button}
                  onPress={() => props.GetstartedButtonPress()}>
                  <Text style={styles.buttonText}>Get started</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
});

export default OnbordingAllSetComponent;
