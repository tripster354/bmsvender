import messaging from '@react-native-firebase/messaging';
import HomeAction, {
  FCMSaveAction,
  onUpdateAppToken,
} from '../Redux/actions/HomeAction';
import {store} from '../Redux/store';
import DeviceInfo from 'react-native-device-info';
import {Alert} from 'react-native';

export const NotificationHandler = () => {
  checkPermission();
};

async function checkPermission() {
  const enabled = await messaging().hasPermission();
  if (enabled) {
    getToken();
  } else {
    requestPermission();
  }
}

const getDeviceInfo = async () => {
  try {
    let systemVersion = DeviceInfo.getSystemVersion();
    let brand = DeviceInfo.getBrand();
    let deviceName = await DeviceInfo.getDeviceName();
    let deviceToken = await DeviceInfo.getAndroidId();

    return {
      systemVersion,
      brand,
      deviceName,
      deviceToken,
    };
  } catch (error) {
    console.error('Error fetching device info:', error);
    return null;
  }
};

async function getToken() {
  await messaging().registerDeviceForRemoteMessages();

  let fcmToken = await store.getState().HomeReducer.fcmtoken;
  console.log('old fcmToken', fcmToken);

  messaging()
    .subscribeToTopic('Tripster')
    .then(() => console.log('Subscribed to topic!'));

  if (fcmToken == null) {
    try {
      await messaging().registerDeviceForRemoteMessages();
      console.log(
        'registertokrn',
        await messaging().registerDeviceForRemoteMessages(),
      );
      const fcmtoken = await messaging().getToken();
      console.log('new generated token', fcmtoken);
      getDeviceInfo().then(deviceInfo => {
        const formdata = new FormData();
        formdata.append('fcm_token', fcmtoken);
        formdata.append('device_token', deviceInfo.deviceToken);
        formdata.append('device_brand', deviceInfo.brand);
        formdata.append('device_system_version', deviceInfo.systemVersion);
        formdata.append('device_name', deviceInfo.deviceName);

        // store.dispatch(FCMSaveAction(formdata));
      });
      // store.dispatch(onUpdateAppToken(fcmtoken));
    } catch (error) {
      getDeviceInfo().then(deviceInfo => {
        const formdata = new FormData();
        formdata.append('fcm_token', fcmToken);
        formdata.append('device_token', deviceInfo.deviceToken);
        formdata.append('device_brand', deviceInfo.brand);
        formdata.append('device_system_version', deviceInfo.systemVersion);
        formdata.append('device_name', deviceInfo.deviceName);

        // store.dispatch(FCMSaveAction(formdata));
      });
    }
  } else {
  }
}
async function requestPermission() {
  try {
    await messaging().requestPermission();
    getToken();
  } catch (error) {
    console.log('permission rejected');
  }
}
