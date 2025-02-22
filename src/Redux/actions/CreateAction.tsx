// Import the necessary modules
import WebServices from '../../services/WebServices';
import common from '../../utils/common';
import commonFunction from '../../utils/commonFunction';
import endPoint from '../../utils/endPoint';
import types from './types';
import GlobalAction from './GlobalAction';
import {AppDispatch, RootState} from '../store';
import {FeedClapCardAction} from './FeedAction';

// Define interfaces for your objects and callbacks
interface IActionObject {
  [key: string]: any;
}

interface ISuccessResponse {
  data: any;
  status: number;
  message?: string;
}

export const ActivityInterestAction =
  (successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true));

    WebServices.getApifixed(
      endPoint.activityinterest,
      '',
      (success: any) => {
        const {data, status} = success;
        // console.log(data);
        // console.log(status);
        console.log('success', data);
        if (status === common.statusCode.success && data) {
          if (data) {
            successCallback(data);
            dispatch({
              type: types.ACTIVITY_INTEREST,
              payload: {activityinterest: data},
            });
          } else {
            successCallback(data);
          }
          dispatch(GlobalAction.handleLoader(false));
          // data.message && commonFunction.showToast(data.message);
        } else {
          // data.message && commonFunction.showToast(data.message);
          dispatch(GlobalAction.handleLoader(false));
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        dispatch(GlobalAction.handleLoader(false));
      },
    );
  };

export const SelectedLocationDataGetAction =
  (obj: IActionObject, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch({
      type: types.SELECTED_LOCATION_DATA_GET,
      payload: {selectedlocationdata: obj},
    });
  };
export const SelectedLocationDataGetClearAction =
  () => (dispatch: any, getState: any) => {
    dispatch({
      type: types.SELECTED_LOCATION_DATA_GET_CLEAR,
    });
  };

export const CreateActivityAction =
  (obj: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true));

    WebServices.postApiCall(
      endPoint.createactivity,
      obj,
      (success: any) => {
        const {data, status} = success;
        // console.log(data);
        // console.log(status);
        console.log('success', data);
        if (status === common.statusCode.success) {
          if (data.status === common.statusCode.success) {
            successCallback(data);
            dispatch({
              type: types.CREATE_ACTIVITY,
            });
          } else {
            successCallback(data);
          }
          dispatch(GlobalAction.handleLoader(false));
          data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(GlobalAction.handleLoader(false));
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        dispatch(GlobalAction.handleLoader(false));
      },
    );

    // const myHeaders = new Headers();
    // myHeaders.append('Token', '1751153025');
    // myHeaders.append('UserType', '4');

    // const requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: obj,
    //   redirect: 'follow',
    // };

    // fetch(
    //   'https://bookmyskills.co.in/Activity/activity-insert-update',
    //   requestOptions,
    // )
    //   .then(response => response.text())
    //   .then(result => {
    //     console.log(result);
    //     dispatch(GlobalAction.handleLoader(false));
    //   })
    //   .catch(error => {
    //     console.error(error), dispatch(GlobalAction.handleLoader(false));
    //   });
  };
