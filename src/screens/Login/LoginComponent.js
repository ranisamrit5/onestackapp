import React, { memo, useState } from 'react';
import { View, TextInput, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { colors, Images } from '../../utils/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Spinner from 'react-native-loading-spinner-overlay';
const LoginComponent = memo((props) => {

  const [isSecureConfirmPassword, setIsSecureConfirmPassword] = useState(true)
  return (
    <View safe style={styles.container}>
      <Spinner visible={props.isLoading} />
      <SafeAreaView style={styles.safeContainer}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} style={styles.keyBordContainer}>
          <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1 }} >
            <Text style={styles.hedingText}>Logn Screen</Text>


            <TouchableOpacity  onPress={() => props.go()}>
              <Text style={styles.hedingText}>Go To Home</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
});

export default LoginComponent;
