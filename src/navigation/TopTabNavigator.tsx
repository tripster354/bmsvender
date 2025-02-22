import React from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '../utils/theme/colors';
import PersonalDetails from '../screens/PersonalDetails';
import ProfessionalDetails from '../screens/ProfessionalDetails';
import { dW } from '../utils/dynamicHeigthWidth';
import fonts from '../assets/fonts';
type TopTabNavigatorProps = {
  isTabScrollable?: boolean;
  initialRouteName?: string;
  extraParameter?: any;
};

const TopTabNavigator: React.FC<TopTabNavigatorProps> = ({
  isTabScrollable = false,
  extraParameter,
}) => {
  const Tab = createMaterialTopTabNavigator();

  const windowWidth = Dimensions.get('window').width;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: isTabScrollable,
        tabBarActiveTintColor: Colors.lightBlue,
        tabBarInactiveTintColor: Colors.black,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.lightBlue,
        },  
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: dW(26),
          fontFamily:fonts.NexaBold,
        },
        tabBarStyle: {
            
        },
        // tabBarPressColor: Colors.black,
        lazy: true,
        swipeEnabled: true,
      }}
      tabBarOptions={{
        tabStyle: {
          // Customize tab style
          padding: 0, // Set padding to 0 or adjust as needed
          margin: 0, // Set margin to 0 or adjust to reduce space between tabs
          // width: isTabScrollable ? undefined : tabWidth,
        },
        style: {
          // Overall tab bar style adjustments
          paddingHorizontal: 10, // Optional: reduce horizontal padding around the tab bar itself
        },
      }}>
        <Tab.Screen
          name={'Personal Details'}
          component={PersonalDetails}
        />
        <Tab.Screen name={"Professional Details"} component={ProfessionalDetails} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;