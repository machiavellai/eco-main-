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
  ThankYou,
} from './screens';

import EmergencyContact from './forms/EmergencyContact';
import DressCode from './forms/PersonalDetails';
import Address from './forms/Address';
import RecieptAcknowledge from './forms/ReceiptAcknowledge';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FFFFFF',
          borderColor: '#3F81B4',
          headerShown: false,
          borderWidth: 4,
          headerTitle: 'Dashboard',
          headerStyle: {height: 10},
          headerTitleStyle: {fontSize: 18, padding: 5},
        },
      }}>
      <Drawer.Group screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="PersonalHistory" component={DressCode} />
        <Drawer.Screen name="AdressForm" component={Address} />
        {/* <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} /> */}
        {/* <Drawer.Screen name="BioData" component={BioData} /> */}
      </Drawer.Group>
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding Screen" component={OnboardingScreen} />
        <Stack.Screen name="SetUp" component={SetUp} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />

        <Stack.Screen name="Home Screen" component={DrawerNavigator} />
        <Stack.Screen name="Personal History" component={DressCode} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Modal" component={ModalO} />
        <Stack.Screen name="License Agreement" component={LicenseAgreement} />
        <Stack.Screen name="Get Started" component={GetStarted} />
        <Stack.Screen name="Contact" component={EmergencyContact} />
        <Stack.Screen name="Thanks" component={ThankYou} />
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
