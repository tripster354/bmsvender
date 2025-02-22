import WebServices from '../../services/WebServices';
import common from '../../utils/common';
import commonFunction from '../../utils/commonFunction';
import endPoint from '../../utils/endPoint';
import types from './types';
import GlobalAction from './GlobalAction';
import {MenuCardData} from '../../assets/Data';

export const MenuListAction =
  (obj?: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    // const {
    //   ProfileReducer: {MLPage},
    // } = getState();

    // const formdata = new FormData();
    // formdata.append('page', MLPage);
    // formdata.append('item_count', '10');

    // WebServices.postApiCall(
    //   endPoint.mybooster,
    //   formdata,
    //   (success: any) => {
    //     const {data, status} = success;
    //     console.log(data);
    //     console.log(status);
    //     console.log('success', data.data.result);
    //     if (status === common.statusCode.success && data) {
    //       if (data.status == true) {
    //         successCallback(data);
    dispatch({
      type: types.MENU_LIST,
      payload: MenuCardData,
      LordMorePayload: true,
      DataCount: 100,
      page: obj?.page || null,
    });
    dispatch(GlobalAction.handleLoader(false, false, types.MENU_LIST));
    //       } else {
    //         successCallback(data);
    //       }
    //       dispatch(GlobalAction.handleLoader(false, false, types.MY_BOOSTER));
    //       // data.message && commonFunction.showToast(data.message);
    //     } else {
    //       data.message && commonFunction.showToast(data.message);
    //       dispatch(GlobalAction.handleLoader(false, false, types.MY_BOOSTER));
    //     }
    //   },
    //   (fail: any) => {
    //     WebServices.handleApiError(fail);
    //     dispatch(GlobalAction.handleLoader(false, false, types.MY_BOOSTER));
    //   },
    // );
  };
