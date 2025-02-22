import React from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '../../../utils/theme/colors';
import { dW } from '../../../utils/dynamicHeigthWidth';
import fonts from '../../../assets/fonts';
import MyEarning from './MyEarning';
import OutstandingPayment from './OutstandingPayment';
import CancelledEarning from './CancelledEarning';
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
          name={'My       Earning'}
          component={MyEarning}
        />
        <Tab.Screen name={"Outstanding Payment"} component={OutstandingPayment} />
        <Tab.Screen name={"Cancelled Earning"} component={CancelledEarning} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;