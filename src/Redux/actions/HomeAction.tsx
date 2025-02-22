import WebServices from '../../services/WebServices';
import common from '../../utils/common';
import commonFunction from '../../utils/commonFunction';
import endPoint from '../../utils/endPoint';
import types from './types';
import GlobalAction from './GlobalAction';

export const GetAllActivity =
  (obj: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true));

    const {
      HomeReducer: {APage},
    } = getState();

    const formdata = new FormData();
    formdata.append('page', obj.page ? obj?.page : APage);
    formdata.append('per_page', '10');

    WebServices.postApiCall(
      endPoint.getallactivity,
      formdata,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data);
        if (status === common.statusCode.success && data) {
          if (data.status === common.statusCode.success) {
            successCallback(data);

            dispatch({
              type: types.GET_ALL_ACTIVITY,
              payload: data.data,
              LordMorePayload: data.isMore,
              DataCount: data.totalRecords,
              page: obj?.page || null,
            });
          } else {
            successCallback(data);
          }
          dispatch(GlobalAction.handleLoader(false));
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
