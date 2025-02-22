import React from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '../../../../utils/theme/colors';
import { dH, dW } from '../../../../utils/dynamicHeigthWidth';
import fonts from '../../../../assets/fonts';
import Following from './Following';
import Explore from './Explore';
type TopTabNavigatorProps = {
  isTabScrollable?: boolean;
  initialRouteName?: string;
  extraParameter?: any;
  data? : any
};

const TopTabNavigator: React.FC<TopTabNavigatorProps> = ({
  isTabScrollable = false,
  extraParameter,
  data
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
            marginHorizontal:dW(35),
            marginTop:dH(56),
            elevation: 0, // for Android
          shadowOpacity: 0, // for iOS
          // borderBottomWidth: 1, // for iOS
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
        <Tab.Screen name={'Following'} component={Following } />
          {/* {() =><Following parentData={data} />} */}
        {/* </Tab.Screen> */}
        <Tab.Screen name={"Explore"} component={Explore} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;