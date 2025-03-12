import {
  Alert,
  AlertButton,
  ImageStyle,
  Linking,
  Platform,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {AppHelper, AppStrings} from '.';
import ImageCropPicker, {Options} from 'react-native-image-crop-picker';
import * as Permissions from 'react-native-permissions';
import RNFS from 'react-native-fs';
import {
  PERMISSIONS,
  request,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';

export const isEmpty = (value: any): boolean => {
  if (typeof value === 'string') {
    return !value && value.trim().length === 0;
  }
  if (typeof value === 'number') {
    return !value && value === 0;
  }
  if (Array.isArray(value)) {
    return value && value.length === 0;
  } else {
    return true;
  }
};

export const showAlert = (
  title: string = '',
  message: string = '',
  buttons: AlertButton[],
) => {
  const {Alert} = require('react-native');
  Alert.alert(title, message, buttons);
};

const _openAppSetting = () => {
  if (Platform.OS === 'ios') {
    Linking.openURL('app-settings:');
  } else if (Platform.OS === 'android') {
    Linking.openSettings();
  }
};

export const getShadowStyle = (shadowColor: string) => {
  return {
    elevation: 10,
    shadowColor: shadowColor,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {height: 2, width: 1},
  };
};

// export const getDistance = (location: any, item: ActivityType) => `${distance(location.latitude, location.longitude, parseFloat(item.latitude), parseFloat(item.longitude)).toFixed(2)} km away`

export const getError = (response: any) => {
  return (
    response?.data?.message ??
    response?.data ??
    AppStrings.common.somethingWrong
  );
};

export const emptyString = '';

// --------Image Picker Permission------------

const galleryPermissionGranted = (type: string) => {
  let profileoption = {
    compressImageQuality: 0.6,
    cropping: true,
    cropperCircleOverlay: true,
    hideBottomControls: true,
    showCropGuidelines: false,
    showCropFrame: false,
    mediaType: 'photo',
  } as Options;

  let TrailPostOption = {
    width: 1500,
    height: 2000, // Adjusted for a more portrait-like crop
    cropping: true,
    cropperCircleOverlay: false, // Set to true for a circular crop overlay, if needed
    hideBottomControls: true, // Hide bottom controls
    showCropGuidelines: true,
    showCropFrame: true,
    mediaType: 'photo',
    compressImageMaxWidth: 800, // Increase max width
    compressImageMaxHeight: 800, // Increase max height
    compressImageQuality: 0.6, // Set compression quality to maximum
  };
  let coverOption = {
    width: 2000,
    height: 1000, // Adjusted for a more portrait-like crop
    cropping: true,
    cropperCircleOverlay: false, // Set to true for a circular crop overlay, if needed
    hideBottomControls: true, // Hide bottom controls
    showCropGuidelines: true,
    showCropFrame: true,
    mediaType: 'photo',
    compressImageMaxWidth: 800, // Increase max width
    compressImageMaxHeight: 800, // Increase max height
    compressImageQuality: 0.6, // Set compression quality to maximum
  };
  let PostOption = {
    width: 400,
    height: 400,
    compressImageQuality: 0.6,
    cropping: true,
    hideBottomControls: true,
    showCropGuidelines: false,
    showCropFrame: false,
    mediaType: 'photo',
  };

  const videoOption = {
    mediaType: 'video',
    videoQuality: 'high',
  };

  let option = {};

  switch (type) {
    case 'TrailPost':
      option = TrailPostOption;
      break;
    case 'ProfilePost':
      option = profileoption;
      break;
    case 'Post':
      option = PostOption;
    case 'video':
      option = videoOption;
    case 'cover':
      option = coverOption;
      break;
  }

  let path = '';
  let videopath = '';

  return new Promise((resolver, reject) => {
    type == 'video'
      ? ImagePicker.launchImageLibrary(option)
          .then((res: any) => {
            videopath = res.videopath;
            if (res.didCancel) {
              console.log('User cancelled image picker');
            } else if (res.errorCode) {
              console.log('ImagePicker Error: ', res.errorMessage);
            } else {
              resolver({type: 'video', data: res});
            }
          })
          .catch(error => {
            videopath = error;
            return reject(error);
          })
      : ImageCropPicker.openPicker(option)
          .then(res => {
            // console.log('res', res);
            path = res.path;
            return resolver({type: 'image', data: res});
          })
          .catch(error => {
            path = error;
            return reject(error);
          });
  });
};

const cameraPermissionGranted = (type: string) => {
  let profileoption = {
    compressImageQuality: 0.7,
    cropping: true,
    cropperCircleOverlay: true,
    hideBottomControls: true,
    showCropGuidelines: false,
    showCropFrame: false,
    mediaType: 'photo',
  } as Options;

  let TrailPostOption = {
    width: 1500,
    height: 2000, // Adjusted for a more portrait-like crop
    cropping: true,
    cropperCircleOverlay: false, // Set to true for a circular crop overlay, if needed
    hideBottomControls: true, // Hide bottom controls
    showCropGuidelines: true,
    showCropFrame: true,
    mediaType: 'photo',
    compressImageMaxWidth: 800, // Increase max width
    compressImageMaxHeight: 800, // Increase max height
    compressImageQuality: 0.6, // Set compression quality to maximum
  };
  let PostOption = {
    width: 1000,
    height:1000,
    compressImageQuality: 0.7,
    cropping: true,
    hideBottomControls: true,
    showCropGuidelines: false,
    showCropFrame: false,
    mediaType: 'photo',
    multiple: true,
  };

  let option = {};

  switch (type) {
    case 'TrailPost':
      option = TrailPostOption;
      break;
    case 'ProfilePost':
      option = profileoption;
      break;
    case 'Post':
      option = PostOption;
      break;
  }
  let path = '';
  return new Promise((resolver, reject) => {
    ImageCropPicker.openCamera(option)
      .then(res => {
        path = res.path;
        return resolver(res);
      })
      .catch(error => {
        path = error;
        return reject(error);
      });
  });
};

const askGalleryPermissionAlert = () => {
  const buttons: AlertButton[] = [
    {
      text: AppStrings.common.ok,
      onPress: () => {
        _openAppSetting();
      },
    },
    {
      text: AppStrings.common.cancel,
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
  ];
  showAlert(
    AppHelper.emptyString,
    AppStrings.common.givePermissionSettings,
    buttons,
  );
};

const askCameraPermissionAlert = () => {
  const buttons: AlertButton[] = [
    {
      text: AppStrings.common.ok,
      onPress: () => {
        _openAppSetting();
      },
    },
    {
      text: AppStrings.common.cancel,
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
  ];
  showAlert(AppHelper.emptyString, AppStrings.common.allowCamera, buttons);
};

export const cameraClick = async (callback: any, type: string) => {
  if (Platform.OS == 'android') {
    try {
      const status = await Permissions.check(
        Permissions.PERMISSIONS.ANDROID.CAMERA,
      );
      console.error(status);
      if (status == AppStrings.common.granted) {
        const result = await cameraPermissionGranted(type);
        callback(result);
      } else {
        const result = await Permissions.request(
          Permissions.PERMISSIONS.ANDROID.CAMERA,
        );
        console.error(status);
        if (result == AppStrings.common.granted) {
          const result = await cameraPermissionGranted(type);
          callback(result);
        } else {
          askCameraPermissionAlert();
        }
      }
    } catch (error) {}
  } else {
    try {
      const permissionToCheck = Permissions.PERMISSIONS.IOS.CAMERA;
      const status = await Permissions.check(permissionToCheck);
      if (
        status === Permissions.RESULTS.GRANTED ||
        status == Permissions.RESULTS.LIMITED
      ) {
        const result = await cameraPermissionGranted(type);
        callback(result);
      } else {
        const result = await Permissions.request(permissionToCheck);

        if (
          result === Permissions.RESULTS.GRANTED ||
          result === Permissions.RESULTS.LIMITED
        ) {
          const result = await cameraPermissionGranted(type);
          callback(result);
        } else {
          askGalleryPermissionAlert();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export const galleryClick = async (callback: any, type: string) => {
  if (Platform.OS === 'android') {
    try {
      const permissionToCheck =
        Platform.Version >= 33
          ? Permissions.PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
          : Permissions.PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
      const status = await Permissions.check(permissionToCheck);
      if (status === Permissions.RESULTS.GRANTED) {
        const result = await galleryPermissionGranted(type);
        callback(result);
      } else {
        const result = await Permissions.request(permissionToCheck);

        if (result === Permissions.RESULTS.GRANTED) {
          const result = await galleryPermissionGranted(type);
          callback(result);
        } else {
          askGalleryPermissionAlert();
        }
      }
    } catch (error) {
      console.error(error);
    }
  } else if (Platform.OS === 'ios') {
    try {
      const permissionToCheck = Permissions.PERMISSIONS.IOS.PHOTO_LIBRARY;
      const status = await Permissions.check(permissionToCheck);
      if (
        status === Permissions.RESULTS.GRANTED ||
        status == Permissions.RESULTS.LIMITED
      ) {
        const result = await galleryPermissionGranted(type);
        callback(result);
      } else {
        const result = await Permissions.request(permissionToCheck);

        if (
          result === Permissions.RESULTS.GRANTED ||
          result === Permissions.RESULTS.LIMITED
        ) {
          const result = await galleryPermissionGranted(type);
          callback(result);
        } else {
          askGalleryPermissionAlert();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export const profilePictureClick = async (type: string) => {
  return new Promise(
    (resolver: (value: string) => void, reject: (reason?: any) => void) => {
      const buttons: AlertButton[] = [
        {
          text: 'Camera',
          onPress: async () => {
            try {
              cameraClick((result: any) => {
                return resolver(result);
              }, type);
            } catch (error) {
              return reject(error);
            }
          },
        },
        {
          text: 'Gallery',
          onPress: async () => {
            try {
              galleryClick((result: any) => {
                return resolver(result);
              }, type);
            } catch (error) {
              return reject(error);
            }
          },
        },
        {
          text: AppStrings.common.cancel,
          style: 'cancel',
        },
      ];
      showAlert(
        AppStrings.common.chooseImage,
        AppStrings.common.selectOption,
        buttons,
      );
    },
  );
};

export const isEmptyForOTP = (object: any) => {
  if (object === undefined) {
    return true;
  } else if (object === null) {
    return true;
  } else if (object instanceof Array) {
    return object === undefined || object.length === 0;
  } else if (typeof object === 'string') {
    return object.toString().trim().length === 0;
  } else if (object instanceof Object) {
    return Object.keys(object).length === 0;
  } else {
    return false;
  }
};

export function getImageName(imageData: any) {
  const pathParts = imageData?.split('/');
  return pathParts[pathParts?.length - 1];
}

export const prepareImageFile = async (url: any) => {
  try {
    // Split the URL to get the last part as the file name
    const uriComponents = url.split('/');
    const fileNameAndExtension = uriComponents[uriComponents.length - 1];

    // Define the destination path in the temporary directory
    const destPath =
      'file://' + `${RNFS.TemporaryDirectoryPath}/${fileNameAndExtension}.jpg`;

    // Copy the file from the original URL to the new destination path
    await RNFS.copyFile(url, destPath);
    console.log('File copied to:', destPath);

    // Prepare the file object
    const file = {
      uri: destPath,
      name: getImageName(destPath),
      type: 'image/jpeg', // Assuming the image type is JPEG
    };

    return file;
  } catch (error) {
    console.error('Error preparing image file:', error);
    throw error; // Rethrow or handle as needed
  }
};

const requestMultiplePermissions = async (permissions: string[]) => {
  const results: {[key: string]: string} = {};
  for (const permission of permissions) {
    results[permission] = await request(permission);
  }
  return results;
};

const checkMultiplePermissions = async (permissions: string[]) => {
  const results: {[key: string]: string} = {};
  for (const permission of permissions) {
    results[permission] = await Permissions.check(permission);
  }
  return results;
};

export const requestPhotoLibraryPermission = async (
  callback: (granted: boolean) => void,
) => {
  try {
    let permissionsToRequest: string[] = [];

    if (Platform.OS === 'android') {
      if (Platform.Version >= 34) {
        // For Android 14+
        permissionsToRequest = [
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          // PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
        ];
      } else {
        permissionsToRequest = [
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        ];
      }
    } else if (Platform.OS === 'ios') {
      permissionsToRequest = [
        PERMISSIONS.IOS.PHOTO_LIBRARY,
        PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY, // For iOS 14+
      ];
    }

    const results = await requestMultiplePermissions(permissionsToRequest);

    console.log('Permission results:', results); // Log the results for debugging

    const neverAskAgain = Object.values(results).some(
      response => response === RESULTS.BLOCKED,
    );

    if (neverAskAgain) {
      Alert.alert(
        'Permissions Required',
        'You have denied some permissions permanently. Please enable storage permissions manually in the app settings to proceed.',
        [
          {
            text: 'Open Settings',
            onPress: () => {
              openSettings();
              callback(false); // Return false as permissions are blocked
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      const anyDenied = Object.values(results).some(
        response => response === RESULTS.DENIED,
      );
      if (anyDenied) {
        Alert.alert(
          'Permissions Required',
          'You have denied some permissions. Please enable storage permissions to proceed.',
          [
            {
              text: 'Try Again',
              onPress: () => requestPhotoLibraryPermission(callback), // Retry requesting permissions
            },
          ],
          {cancelable: false},
        );
        callback(false); // Return false as some permissions are denied
      } else {
        console.log('All permissions granted');
        callback(true); // Return true as all permissions are granted
      }
    }
  } catch (err) {
    console.warn(err);
    callback(false); // Return false in case of an error
  }
};

export const checkPhotoMediaPermissions = async (
  callback: (granted: boolean) => void,
) => {
  try {
    let permissionsToCheck: string[] = [];

    if (Platform.OS === 'android') {
      if (Platform.Version >= 34) {
        // For Android 14+
        permissionsToCheck = [
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          // PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
        ];
      } else {
        permissionsToCheck = [PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE];
      }
    } else if (Platform.OS === 'ios') {
      permissionsToCheck = [
        PERMISSIONS.IOS.PHOTO_LIBRARY,
        PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY, // For iOS 14+
      ];
    }

    const checkResults = await checkMultiplePermissions(permissionsToCheck);
    console.log('Check results:', checkResults); // Log the results for debugging

    const allGranted = Object.values(checkResults).every(
      response => response === RESULTS.GRANTED,
    );

    callback(allGranted); // Return true if all permissions are already granted, false otherwise
  } catch (err) {
    console.warn(err);
    callback(false); // Return false in case of an error
  }
};

export const requestMicrophonePermission = async (
  callback: (granted: boolean) => void,
) => {
  try {
    let permissionsToRequest: string[] = [];

    if (Platform.OS === 'android') {
      permissionsToRequest = [PERMISSIONS.ANDROID.RECORD_AUDIO];
    } else if (Platform.OS === 'ios') {
      permissionsToRequest = [PERMISSIONS.IOS.MICROPHONE];
    }

    const results = await requestMultiplePermissions(permissionsToRequest);

    const neverAskAgain = Object.values(results).some(
      response => response === RESULTS.BLOCKED,
    );

    if (neverAskAgain) {
      Alert.alert(
        'Permissions Required',
        'You have denied the microphone permission permanently. Please enable it manually in the app settings to proceed.',
        [
          {
            text: 'Open Settings',
            onPress: () => {
              openSettings();
              callback(false); // Return false as permissions are blocked
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      const anyDenied = Object.values(results).some(
        response => response === RESULTS.DENIED,
      );
      if (anyDenied) {
        Alert.alert(
          'Permissions Required',
          'You have denied the microphone permission. Please enable it to proceed.',
          [
            {
              text: 'Try Again',
              onPress: () => requestMicrophonePermission(callback), // Retry requesting permissions
            },
          ],
          {cancelable: false},
        );
        callback(false); // Return false as some permissions are denied
      } else {
        console.log('All permissions granted');
        callback(true); // Return true as all permissions are granted
      }
    }
  } catch (err) {
    console.warn(err);
    callback(false); // Return false in case of an error
  }
};

export const checkMicroPhonePermissions = async (
  callback: (granted: boolean) => void,
) => {
  try {
    let permissionsToCheck: string[] = [];

    if (Platform.OS === 'android') {
      permissionsToCheck = [
        PERMISSIONS.ANDROID.RECORD_AUDIO, // Microphone permission for Android
      ];
    } else if (Platform.OS === 'ios') {
      permissionsToCheck = [
        PERMISSIONS.IOS.MICROPHONE, // Microphone permission for iOS
      ];
    }

    const checkResults = await checkMultiplePermissions(permissionsToCheck);
    const allGranted = Object.values(checkResults).every(
      response => response === RESULTS.GRANTED,
    );

    callback(allGranted); // Return true if all permissions are already granted, false otherwise
  } catch (err) {
    console.warn(err);
    callback(false); // Return false in case of an error
  }
};

export const requestCameraPermission = async (
  callback: (granted: boolean) => void,
) => {
  try {
    let permissionsToRequest: string[] = [];

    if (Platform.OS === 'android') {
      permissionsToRequest = [PERMISSIONS.ANDROID.CAMERA];
    } else if (Platform.OS === 'ios') {
      permissionsToRequest = [PERMISSIONS.IOS.CAMERA];
    }

    const results = await requestMultiplePermissions(permissionsToRequest);

    const neverAskAgain = Object.values(results).some(
      response => response === RESULTS.BLOCKED,
    );

    if (neverAskAgain) {
      Alert.alert(
        'Permissions Required',
        'You have denied camera permissions permanently. Please enable camera permissions manually in the app settings to proceed.',
        [
          {
            text: 'Open Settings',
            onPress: () => {
              openSettings();
              callback(false); // Return false as permissions are blocked
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      const anyDenied = Object.values(results).some(
        response => response === RESULTS.DENIED,
      );
      if (anyDenied) {
        Alert.alert(
          'Permissions Required',
          'You have denied camera permissions. Please enable camera permissions to proceed.',
          [
            {
              text: 'Try Again',
              onPress: () => requestCameraPermission(callback), // Retry requesting permissions
            },
          ],
          {cancelable: false},
        );
        callback(false); // Return false as some permissions are denied
      } else {
        console.log('All permissions granted');
        callback(true); // Return true as all permissions are granted
      }
    }
  } catch (err) {
    console.warn(err);
    callback(false); // Return false in case of an error
  }
};

export const checkCameraPermissions = async (
  callback: (granted: boolean) => void,
) => {
  try {
    let permissionsToCheck: string[] = [];

    if (Platform.OS === 'android') {
      permissionsToCheck = [PERMISSIONS.ANDROID.CAMERA];
    } else if (Platform.OS === 'ios') {
      permissionsToCheck = [PERMISSIONS.IOS.CAMERA];
    }

    const checkResults = await checkMultiplePermissions(permissionsToCheck);
    const allGranted = Object.values(checkResults).every(
      response => response === RESULTS.GRANTED,
    );

    callback(allGranted); // Return true if all permissions are already granted, false otherwise
  } catch (err) {
    console.warn(err);
    callback(false); // Return false in case of an error
  }
};

export const requestAllPermissions = async (
  callback: (granted: boolean) => void,
) => {
  try {
    let permissionsToRequest: string[] = [];
    let permissionNames: string[] = [];

    if (Platform.OS === 'android') {
      const androidVersion = parseInt(Platform.Version as string, 10);

      if (androidVersion >= 33) {
        // Android 13 and 14
        permissionsToRequest = [
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
        ];
        permissionNames = ['Photos', 'Videos'];
      } else {
        // android 12 and below
        permissionsToRequest = [PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE];
        permissionNames = ['Storage'];
      }
    } else if (Platform.OS === 'ios') {
      // iOS permissions
      permissionsToRequest = [PERMISSIONS.IOS.PHOTO_LIBRARY];
      permissionNames = ['Photo Library'];
    }

    const results = await requestMultiplePermissions(permissionsToRequest);

    const blockedPermissions: string[] = [];
    const deniedPermissions: string[] = [];

    Object.keys(results).forEach((key, index) => {
      if (results[key] === RESULTS.BLOCKED) {
        blockedPermissions.push(permissionNames[index]);
      } else if (results[key] === RESULTS.DENIED) {
        deniedPermissions.push(permissionNames[index]);
      }
    });

    if (blockedPermissions.length > 0) {
      Alert.alert(
        'Permissions Required',
        `You have permanently denied the following permissions: ${blockedPermissions.join(
          ', ',
        )}. Please enable them manually in the app settings to proceed.`,
        [
          {
            text: 'Open Settings',
            onPress: () => {
              openSettings();
              callback(false); // Return false as permissions are blocked
            },
          },
        ],
        {cancelable: false},
      );
    } else if (deniedPermissions.length > 0) {
      Alert.alert(
        'Permissions Required',
        `You have denied the following permissions: ${deniedPermissions.join(
          ', ',
        )}. Please enable them to proceed.`,
        [
          {
            text: 'Try Again',
            onPress: () => requestCameraPermission(callback), // Retry requesting permissions
          },
        ],
        {cancelable: false},
      );
      callback(false); // Return false as some permissions are denied
    } else {
      console.log('All permissions granted');
      callback(true); // Return true as all permissions are granted
    }
  } catch (err) {
    console.warn(err);
    callback(false); // Return false in case of an error
  }
};

const requestVideoPermission = async (): Promise<boolean> => {
  let permission;

  if (Platform.OS === 'ios') {
    permission = PERMISSIONS.IOS.PHOTO_LIBRARY;
  } else {
    permission = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    const androidVersion = parseInt(Platform.Version as string, 10);
    if (androidVersion >= 33) {
      // Android 13 and 14
      permission = PERMISSIONS.ANDROID.READ_MEDIA_VIDEO;
    } else {
      // android 12 and below
      permission = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    }
  }

  // Check for permission
  const result = await Permissions.check(permission);

  if (result === RESULTS.GRANTED) {
    return true; // Permission is granted
  } else if (result === RESULTS.DENIED) {
    // Request permission if not granted
    const requestResult = await request(permission);
    return requestResult === RESULTS.GRANTED;
  } else if (result === RESULTS.BLOCKED) {
    Alert.alert(
      'Permission Blocked',
      'Please go to your settings and allow access to the gallery.',
    );
    return false;
  }

  return false; // In case any other result comes in
};

export const selectVideoFromGallery = async (): Promise<any | null> => {
  const hasPermission = await requestVideoPermission();

  if (hasPermission) {
    const options = {
      mediaType: 'video' as const, // Only allow videos
      videoQuality: 'high' as const, // High-quality video
    };

    return new Promise((resolve, reject) => {
      ImagePicker.launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled video selection');
          resolve(null); // Return null if user cancels
        } else if (response.errorCode) {
          console.log('Error: ', response.errorMessage);
          reject(response.errorMessage); // Return error message if something goes wrong
        } else if (response.assets && response.assets.length > 0) {
          const video = response.assets[0];
          resolve(video); // Return the selected video data
        } else {
          resolve(null); // Return null if no video was selected
        }
      });
    });
  } else {
    Alert.alert(
      'Permission Required',
      'Gallery access is required to select videos.',
    );
    return null; // Return null if permission is not granted
  }
};
