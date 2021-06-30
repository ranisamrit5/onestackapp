import React, { memo } from 'react';
import { View, SafeAreaView, ScrollView,Text } from 'react-native';
import styles from './styles';
import Spinner from 'react-native-loading-spinner-overlay';
const DashBoardComponent = memo((props) => {


  return (
    <View style={styles.container}>
      <Spinner visible={props.isLoading} />
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1 }}>
          <Text onPress={() => props.investmentButtonPress()} style={styles.hedingText}>InvestmentJourney</Text>
          <Text onPress={() => props.logoutButtonPress()} style={styles.hedingText}>Logout</Text>
          <Text onPress={() => props.bbpsButtonPress()} style={styles.hedingText}>BBPS</Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );


});

export default DashBoardComponent;