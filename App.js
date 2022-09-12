/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  SetUp,
  GetStarted,
  OnboardingScreen,
  LicenseAgreement,
  ForgotPassword,
  ModalO,
  HomeScreen,
  LogInScreen,
} from './screens';

import EmergencyContact from './forms/EmergencyContact';
import DressCode from './forms/PersonalDetails';
import Address from './forms/Address';
import RecieptAcknowledge from './forms/ReceiptAcknowledge';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding Screen" component={OnboardingScreen} />
        <Stack.Screen name="SetUp" component={SetUp} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />

        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Personal History" component={DressCode} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Modal" component={ModalO} />
        <Stack.Screen name="License Agreement" component={LicenseAgreement} />
        <Stack.Screen name="Get Started" component={GetStarted} />
        <Stack.Screen name="Contact" component={EmergencyContact} />
        <Stack.Screen name="AddressForm" component={Address} />
        <Stack.Screen
          name="ReceiptAcknowledge"
          component={RecieptAcknowledge}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
