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

export const FeedClapCardAction =
  (obj?: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true, false, types.FEED_CLAP_CARD));

    const formdata = new FormData();
    formdata.append('page', obj.page);
    formdata.append('per_page', '10');

    WebServices.postApiCall(
      endPoint.clapcard,
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
              type: types.FEED_CLAP_CARD,
              payload: data.data.data,
              LordMorePayload: obj.page < data?.data?.last_page ? true : false,
              DataCount: 100,
              page: obj?.page || null,
            });
            dispatch(
              GlobalAction.handleLoader(false, false, types.FEED_CLAP_CARD),
            );
          } else {
            successCallback(data);
            dispatch(
              GlobalAction.handleLoader(false, false, types.FEED_CLAP_CARD),
            );
          }
          dispatch(
            GlobalAction.handleLoader(false, false, types.FEED_CLAP_CARD),
          );
          // data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(
            GlobalAction.handleLoader(false, false, types.FEED_CLAP_CARD),
          );
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        dispatch(GlobalAction.handleLoader(false, false, types.FEED_CLAP_CARD));
      },
    );
  };
