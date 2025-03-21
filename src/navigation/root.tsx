import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';
import Verification from '../screens/Verification';
import SuccessScreen from '../screens/SuccessScreen';
import Notification from '../screens/NotiScreen';
import DrawerNavigator from './DrawerNavigator';
import MyEarning from '../screens/MyEarning';
import RatingReview from '../screens/RatingReview';
import AllActivity from '../screens/AllActivity';
import Setting from '../screens/Setting';
import AboutUs from '../screens/AboutUs';
import {useAppSelector} from '../Redux/reducers/hook';
import { useSelector } from 'react-redux';
import { getAsyncStorage } from '../utils/commonFunction';

const Stack = createNativeStackNavigator();


const SideMenu = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'DrawerMenu'} component={DrawerNavigator} />
      <Stack.Screen name={'MyEarning'} component={MyEarning} />
      <Stack.Screen name={'RatingReview'} component={RatingReview} />
      <Stack.Screen name={'AllActivity'} component={AllActivity} />
      <Stack.Screen name={'Setting'} component={Setting} />
      <Stack.Screen name={'AboutUs'} component={AboutUs} />
    </Stack.Navigator>
  );
};

const Root = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'Splash'} component={Splash} />
          <Stack.Screen name={'Intro'} component={Intro} />
          <Stack.Screen name={'Login'} component={Login} />
          <Stack.Screen name={'CreateAccount'} component={CreateAccount} />
          <Stack.Screen name={'Verification'} component={Verification} />
          <Stack.Screen name={'SuccessScreen'} component={SuccessScreen} />
          <Stack.Screen name={'SideMenu'} component={SideMenu}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
