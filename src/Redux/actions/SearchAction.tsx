import WebServices from '../../services/WebServices';
import common from '../../utils/common';
import commonFunction from '../../utils/commonFunction';
import endPoint from '../../utils/endPoint';
import types from './types';
import GlobalAction from './GlobalAction';

// Define the structure of the expected object in the function
interface SearchInputParams {
  [key: string]: any;
}

export const SearchInputAction =
  (obj: SearchInputParams) =>
  (dispatch: (action: any) => void, getState: () => any) => {
    console.log(obj, 'obj');

    dispatch({
      type: types.SEARCH_INPUT,
      payload: {searchinput: obj},
    });
  };

interface SearchContentParams {
  [key: string]: any;
}

// Action to create a post
export const SearchContentAction =
  (
    obj: SearchContentParams,
    successCallback: (data?: any) => void = () => {},
  ) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true));
    WebServices.postApiCall(
      endPoint.searchcontent,
      obj,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data);
        if (status === common.statusCode.success && data) {
          if (data.status === true) {
            successCallback(data);
            dispatch({
              type: types.SEARCH_CONTENT,
              payload: {searchData: data.data},
            });
          } else {
            successCallback(data);
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
