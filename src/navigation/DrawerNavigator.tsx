import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'; // Import your TabNavigator here
import CommonCustomDrawer from '../components/CommonCustomDrawer'; // Custom Drawer

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CommonCustomDrawer {...props} />}
      screenOptions={{
        headerShown: false, // Hide header for drawer screens
        drawerType: 'slide', // Optional: can change drawer animation
      }}
    >
      {/* TabNavigator is nested inside the Drawer */}
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
