import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabImage from '../assets/images/png/navigationAssets';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyBooking from '../screens/MyBooking';
import AddPostBooking from '../screens/AddPostBooking';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import {dH, dW} from '../utils/dynamicHeigthWidth';
import Colors from '../utils/theme/colors';
import WorkShop from '../screens/WorkShop';
import Home from '../screens/Home';
import BookingDetail from '../screens/MyBooking/SubComponent/BookingDetail';
import FeedDetail from '../screens/Feed/FeedDetail';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CommonCustomDrawer from '../components/CommonCustomDrawer';
import AddLocation from '../screens/AddLocation';
// import BottomTabBar from './CustomeTabBaroption';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const ModalView = () => {
  return <></>;
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName='home'
    >
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'WorkShop'} component={WorkShop} />
    </Stack.Navigator>
  );
};

const MyBookingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'My Booking'} component={MyBooking} />
      <Stack.Screen name={'BookingDetail'} component={BookingDetail} />
    </Stack.Navigator>
  );
};

const FeedStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Feed'} component={Feed} />
      <Stack.Screen name={'FeedDetail'} component={FeedDetail} />
    </Stack.Navigator>
  );
};
const PostStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Booking'} component={AddPostBooking} />
      <Stack.Screen name={'AddLocation'} component={AddLocation} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  // const dispatch = useDispatch();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.lightBlue,
        tabBarInactiveTintColor: Colors.inActive,
      })}
      // tabBar={props => <BottomTabBar {...props} />}
      initialRouteName="HomeStack">
      <Tab.Screen
        name={'HomeStack'}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={
                focused ? TabImage.TabHover.HomeHover : TabImage.TabIcon.home
              }
              style={{height: dH(49), width: dW(47)}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={'MyBookingStack'}
        component={MyBookingStack}
        options={{
          tabBarLabel: 'My Booking',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={
                focused
                  ? TabImage.TabHover.BookingHover
                  : TabImage.TabIcon.MyBooking
              }
              style={{height: dH(46), width: dW(43)}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={'PostStack'}
        component={PostStack}
        options={{
          tabBarLabel: () => null,
          // tabBarLabel: 'Booking',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={TabImage.TabIcon.booking}
              style={{height: dH(200), width: dW(193), bottom: dH(35)}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'FeedStack'}
        component={FeedStack}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={
                focused ? TabImage.TabHover.FeedHover : TabImage.TabIcon.Feed
              }
              style={{height: dH(46), width: dW(40)}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={'profile'}
        component={Profile}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={
                focused
                  ? TabImage.TabHover.ProfileHover
                  : TabImage.TabIcon.profile
              }
              style={{height: dH(47), width: dW(34)}}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
