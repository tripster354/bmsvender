import {Alert} from 'react-native';
import WebServices from '../../services/WebServices';
import common from '../../utils/common';
import commonFunction from '../../utils/commonFunction';
import endPoint from '../../utils/endPoint';
import GlobalAction from './GlobalAction';
import types from './types';

interface IActionObject {
  [key: string]: any;
}

export const RewardListAction =
  (obj?: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true, false, types.REWARD_LIST));

    const formdata = new FormData();
    formdata.append('page', obj.page);
    formdata.append('per_page', '10');

    WebServices.postApiCall(
      endPoint.reward,
      formdata,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data.data.result);
        // console.log('obj_page', obj.page);
        if (status === common.statusCode.success && data) {
          if (data.status == true) {
            successCallback(data);

            dispatch({
              type: types.REWARD_LIST,
              payload: data.data.data,
              LordMorePayload: obj.page < data?.data?.last_page ? true : false,
              DataCount: 100,
              page: obj?.page || null,
            });
            dispatch(
              GlobalAction.handleLoader(false, false, types.REWARD_LIST),
            );
          } else {
            successCallback(data);
            dispatch(
              GlobalAction.handleLoader(false, false, types.REWARD_LIST),
            );
          }
          dispatch(GlobalAction.handleLoader(false, false, types.REWARD_LIST));
          // data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(GlobalAction.handleLoader(false, false, types.REWARD_LIST));
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        dispatch(GlobalAction.handleLoader(false, false, types.FEED_CLAP_CARD));
      },
    );
  };

export const BuyProductAction =
  (obj?: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true));
    WebServices.postApiCall(
      endPoint.buyproduct,
      obj,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data.data);

        if (status === common.statusCode.success && data) {
          if (data.status == true) {
            successCallback(data);

            dispatch({
              type: types.BUY_PRODUCT,
            });
            dispatch(GlobalAction.handleLoader(false));
          } else {
            successCallback(data);
            dispatch(GlobalAction.handleLoader(false));
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
  };

export const RewardHistoryAction =
  (successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true));
    WebServices.getApiCall(
      endPoint.producthistory,
      '',
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data.data.result);

        if (status === common.statusCode.success && data) {
          if (data.status == true) {
            successCallback(data);

            dispatch({
              type: types.PRODUCT_HISTORY,
              payload: {
                productHistory: data.data,
              },
            });
            dispatch(GlobalAction.handleLoader(false));
          } else {
            successCallback(data);
            dispatch(GlobalAction.handleLoader(false));
          }
          dispatch(GlobalAction.handleLoader(false));
          // data.message && commonFunction.showToast(data.message);
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
  };
