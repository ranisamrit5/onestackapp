
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashContainer from '../screens/Splash/SplashContainer';
import OnbordingmobileContainer from '../screens/Onbordingmobile1/OnbordingmobileContainer';
import OnbordingOTPContainer from '../screens/OnbordingOTP2/OnbordingOTPContainer';
import OnbordingPANContainer from '../screens/OnbordingPAN3/OnbordingPANContainer';
import OnbordingEmailContainer from '../screens/OnbordingEmail4/OnbordingEmailContainer';
import OnbordingAllSetContainer from '../screens/OnbordingAllSet5/OnbordingAllSetContainer';
import DashBoardContainer from '../screens/DashBoard/DashBoardContainer';
import MutualFundsContainer from '../screens/InvestmentJourney/MutualFunds/MutualFundsContainer';
import FundInfoContainer from '../screens/InvestmentJourney/FundInfo/FundInfoContainer';
import InvestInContainer from '../screens/InvestmentJourney/InvestIn/InvestInContainer';
import PaymentOptionsContainer from '../screens/InvestmentJourney/PaymentOptions/PaymentOptionsContainer';
import BillPaymentContainer from '../screens/BBPS/BillPayment/BillPaymentContainer';
import RecentBillContainor from '../screens/BBPS/RecentBill/RecentBillContainor';
import BillDetailsContainor from '../screens/BBPS/BillDetails/BillDetailsContainor';
import PaymentBBPSOptionContainor from '../screens/BBPS/PaymentOption/PaymentBBPSOptionContainor';
import CVVContainor from '../screens/BBPS/CVV/CVVContainor';

const SplashStack = createStackNavigator();

const SplashScreen = () => (
  <SplashStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashContainer">
    <SplashStack.Screen name="SplashContainer" component={SplashContainer} />
  </SplashStack.Navigator>
);

const DashBoardStack = createStackNavigator();

const DashBoardScreen = () => (
  <DashBoardStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="DashBoardContainer">
    <DashBoardStack.Screen name="DashBoardContainer" component={DashBoardContainer} />
    <DashBoardStack.Screen name="MutualFundsContainer" component={MutualFundsContainer} />
    <DashBoardStack.Screen name="FundInfoContainer" component={FundInfoContainer} />
    <DashBoardStack.Screen name="InvestInContainer" component={InvestInContainer} />
    <DashBoardStack.Screen name="PaymentOptionsContainer" component={PaymentOptionsContainer} />
    <DashBoardStack.Screen name="BillPaymentContainer" component={BillPaymentContainer} />
    <DashBoardStack.Screen name="RecentBillContainor" component={RecentBillContainor} />
    <DashBoardStack.Screen name="BillDetailsContainor" component={BillDetailsContainor} />
    <DashBoardStack.Screen name="PaymentBBPSOptionContainor" component={PaymentBBPSOptionContainor} />
    <DashBoardStack.Screen name="CVVContainor" component={CVVContainor} />
  </DashBoardStack.Navigator>
);

const OnboardingStack = createStackNavigator();

const OnboardingStackScreen = () => (
  <OnboardingStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnbordingmobileContainer">
    <OnboardingStack.Screen name="OnbordingmobileContainer" component={OnbordingmobileContainer} />
    <OnboardingStack.Screen name="OnbordingOTPContainer" component={OnbordingOTPContainer} />
    <OnboardingStack.Screen name="OnbordingPANContainer" component={OnbordingPANContainer} />
    <OnboardingStack.Screen name="OnbordingEmailContainer" component={OnbordingEmailContainer} />
    <OnboardingStack.Screen name="OnbordingAllSetContainer" component={OnbordingAllSetContainer} />
  </OnboardingStack.Navigator>
);

const OnboardingStack1 = createStackNavigator();

const OnboardingStackScreen1 = () => (
  <OnboardingStack1.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnbordingmobileContainer">
    <OnboardingStack1.Screen name="OnbordingmobileContainer" component={OnbordingmobileContainer} />
    <OnboardingStack1.Screen name="OnbordingOTPContainer" component={OnbordingOTPContainer} />
    <OnboardingStack1.Screen name="OnbordingPANContainer" component={OnbordingPANContainer} />
    <OnboardingStack1.Screen name="OnbordingEmailContainer" component={OnbordingEmailContainer} />
    <OnboardingStack1.Screen name="OnbordingAllSetContainer" component={OnbordingAllSetContainer} />
  </OnboardingStack1.Navigator>
);

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none" initialRouteName={SplashScreen}>
    <RootStack.Screen
      name="Splash"
      component={SplashScreen}
      options={{
        animationEnabled: false
      }}
    />
    <RootStack.Screen
      name="Login"
      component={OnboardingStackScreen}
      options={{
        animationEnabled: false
      }}
    />
    <RootStack.Screen
      name="Login1"
      component={OnboardingStackScreen1}
      options={{
        animationEnabled: false
      }}
    />
    <RootStack.Screen
      name="DashBoard"
      component={DashBoardScreen}
      options={{
        animationEnabled: false
      }}
    />
  </RootStack.Navigator>
);
function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
export default AppNavigator;