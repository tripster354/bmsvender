import WebServices from '../../services/WebServices';
import common from '../../utils/common';
import commonFunction from '../../utils/commonFunction';
import endPoint from '../../utils/endPoint';
import types from './types';
import GlobalAction from './GlobalAction';
import {Alert, NativeModules} from 'react-native';
import {NotificationHandler} from '../../services/notificationServices';
import {interestsData} from '../../assets/Data';
import {navigationRef} from '../../navigation';
import RNRestart from 'react-native-restart';

/**
 * Action to Handle Login
 *
 * @param {*} obj
 * @returns
 */
export const onHandleLoginVerify =
  (obj, successCallback = () => {}) =>
  (dispatch, getState) => {
    dispatch(GlobalAction.handleLoader(true, false, types.OTP_VERIFY));
    WebServices.postApiCall(
      endPoint.loginverify,
      obj,
      success => {
        const {data, status} = success;
        console.log(status);
        console.log('success', data);
        if (status === common.statusCode.success && data) {
          if (data) {
            dispatch({
              type: types.OTP_VERIFY,
              payload: {
                userData: data.userDetails,
                access_token: data.userDetails.currentToken,
              },
            });
            successCallback(data);
            // NativeModules.DevSettings.reload();
            RNRestart.restart();
            dispatch(GlobalAction.handleLoader(false, false, types.OTP_VERIFY));
          } else {
            successCallback(data);
            dispatch(GlobalAction.handleLoader(false, false, types.OTP_VERIFY));
          }
          data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(GlobalAction.handleLoader(false, false, types.OTP_VERIFY));
        }
      },
      fail => {
        WebServices.handleApiError(fail);
        dispatch(GlobalAction.handleLoader(false));
      },
    );
  };

export const onHandleLogin =
  (obj, successCallback = () => {}) =>
  (dispatch, getState) => {
    dispatch(GlobalAction.handleLoader(true));
    WebServices.postApiCall(
      endPoint.login,
      obj,
      success => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data);
        if (status == common.statusCode.success) {
          if (data.status == true) {
            successCallback(data);
            dispatch(GlobalAction.handleLoader(false));
          } else {
            successCallback(data);
            dispatch(GlobalAction.handleLoader(false));
          }
          data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(GlobalAction.handleLoader(false));
        }
      },
      fail => {
        WebServices.handleApiError(fail);
        dispatch(GlobalAction.handleLoader(false));
      },
    );
  };

export const onHandleRegister =
  (obj, successCallback = () => {}) =>
  (dispatch, getState) => {
    dispatch(GlobalAction.handleLoader(true));
    WebServices.postApiCallFixed(
      endPoint.register,
      obj,
      success => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data);
        if (status === common.statusCode.success && data) {
          if (data.status) {
            dispatch({
              type: types.OTP_VERIFY,
              payload: {
                userData: data.data,
                access_token: data.data.token,
              },
            });
            successCallback(data);
            dispatch(GlobalAction.handleLoader(false));
          } else {
            successCallback(data);
            dispatch(GlobalAction.handleLoader(false));
          }
          data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(GlobalAction.handleLoader(false));
        }
      },
      fail => {
        WebServices.handleApiError(fail);
        dispatch(GlobalAction.handleLoader(false));
      },
    );
  };

/**
 * Action to Handle Logout
 *
 * @param {*} obj
 * @returns
 */
export const onHandleLogout = successCallback => {
  return (dispatch, getState) => {
    dispatch({
      type: types.LOGOUT,
      payload: {
        access_token: null,
        userData: [],
      },
    });
    successCallback(true);
    commonFunction.showToast('Logout successfull');
  };
};
