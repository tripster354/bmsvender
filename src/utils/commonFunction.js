import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import Snackbar from 'react-native-snackbar';

export const showAlert = (
  title,
  message,
  positiveText = 'Ok',
  negativeText = 'Cancel',
  onPositivePress,
  onNegativePress,
  isSingleAction,
) => {
  if (isSingleAction)
    Alert.alert(title, message, [
      {text: positiveText, onPress: () => onPositivePress()},
    ]);
  else
    Alert.alert(title, message, [
      {text: positiveText, onPress: () => onPositivePress()},
      {text: negativeText, onPress: () => onNegativePress()},
    ]);
};
/**
 * Shows error messages using snackbar
 *
 * @param {string} error
 */
export const showToast = (message, durationMillis = 3000) => {
  Snackbar.show({
    text: message,
    // duration: Snackbar.LENGTH_LONG,
    duration: durationMillis,
    backgroundColor: 'rgba(0,0,0,0.9)',
    textColor: 'white',
  });
};

export const setAsyncStorage = async (KeyName,data) => {
  await AsyncStorage.setItem(KeyName, data);
}

export const getAsyncStorage = async (KeyName) => {
  const data = await AsyncStorage.getItem(KeyName);;
  return data !== null ? data : '';
}

export const removeAsyncStorage = async (KeyName) => {
  await AsyncStorage.removeItem(KeyName);
}


