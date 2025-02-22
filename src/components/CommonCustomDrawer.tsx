import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HomeIcon from '../assets/images/home';
import {dH, dW} from '../utils/dynamicHeigthWidth';
import Colors from '../utils/theme/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import fonts from '../assets/fonts';
import {DrawerActions} from '@react-navigation/native';
import {onHandleLogout} from '../Redux/actions/AuthAction';
import {useAppDispatch} from '../Redux/reducers/hook';
import {LightSpeedOutLeft} from 'react-native-reanimated';

const CommonCustomDrawer = ({navigation}) => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const STATUSBAR_HEIGHT = insets.top;
  return (
    <ScrollView
      style={[styles.drawerContainer, {marginTop: STATUSBAR_HEIGHT + 10}]}>
      <View style={styles.HeaderViewStyle}>
        <Text style={styles.menuTitle}>Menu</Text>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Image
            source={HomeIcon.StaticIcons.CrossButton}
            style={styles.CrossButtonStyle}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.closeDrawer()}>
        <Text style={styles.menuItem}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate('MyEarning');
        }}>
        <Text style={styles.menuItem}>My Earning</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate('RatingReview');
        }}>
        <Text style={styles.menuItem}>My Rating</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate('AllActivity');
        }}>
        <Text style={styles.menuItem}>All Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Support')}
        disabled={true}>
        <Text style={styles.menuItem}>Support</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate('AboutUs');
        }}>
        <Text style={styles.menuItem}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AdBanner')}
        disabled={true}>
        <Text style={styles.menuItem}>Ad Banner</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SupportTicket')}
        disabled={true}>
        <Text style={styles.menuItem}>Support Ticket</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate('Setting');
        }}>
        <Text style={styles.menuItem}>Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Log out', 'Are you sure you want to Log out', [
            {text: 'Cancel'},
            {
              text: 'OK',
              onPress: () => dispatch(onHandleLogout(res => {})),
            },
          ]);
        }}>
        <Text style={styles.menuItem}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert('Account deleted')}
        style={styles.deleteAccountButton}>
        <Text style={styles.deleteAccountText}>Delete Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CommonCustomDrawer;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingHorizontal: dW(35),
    // padding: 16,
    backgroundColor: Colors.white,
  },
  HeaderViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CrossButtonStyle: {
    height: dH(90),
    width: dW(90),
  },
  menuTitle: {
    fontSize: dW(40),
    fontFamily: fonts.NexaBold,
    color: Colors.black,
  },
  menuItem: {
    fontSize: dW(30),
    color: Colors.black,
    fontFamily: fonts.NexaBold,
    paddingVertical: dH(32),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteAccountButton: {
    marginTop: dH(91),
    alignSelf: 'flex-end',
  },
  deleteAccountText: {
    color: Colors.Red,
    fontSize: dW(30),
    fontFamily: fonts.NexaBold,
  },
});
