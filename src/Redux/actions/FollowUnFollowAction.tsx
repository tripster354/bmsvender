import WebServices from '../../services/WebServices';
import common from '../../utils/common';
import commonFunction from '../../utils/commonFunction';
import endPoint from '../../utils/endPoint';
import types from './types';
import GlobalAction from './GlobalAction';
import {Alert} from 'react-native';

interface followParams {
  [key: string]: any;
}

export const FollowAction =
  (
    obj: followParams,
    type: string,
    successCallback: (data?: any) => void = () => {},
  ) =>
  (dispatch: any, getState: any) => {
    const formdata = new FormData();
    formdata.append('followed_id', obj.id);

    // dispatch(GlobalAction.handleLoader(true));
    WebServices.postApiCall(
      endPoint.follow,
      formdata,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data);
        if (status === common.statusCode.success && data) {
          if (data.status === true) {
            successCallback(data);

            if (type == types.FOLLOW) {
              dispatch({
                type: types.FOLLOW,
                payload: obj.id,
              });
            } else if (type == types.FOLLOWING_TO_FOLLOW) {
              dispatch({
                type: types.FOLLOWING_TO_FOLLOW,
                payload: obj.id,
              });
            } else if (type == types.OTHER_PROFILE_FOLLOW_UNFOLLOW) {
              dispatch({
                type: types.OTHER_PROFILE_FOLLOW_UNFOLLOW,
                payload: obj.id,
              });
            }
          } else {
            successCallback(data);
          }
          // dispatch(GlobalAction.handleLoader(false));
          data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          // dispatch(GlobalAction.handleLoader(false));
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        // dispatch(GlobalAction.handleLoader(false));
      },
    );
  };

export const UnfollowAction =
  (
    obj: followParams,
    type: string,
    successCallback: (data?: any) => void = () => {},
  ) =>
  (dispatch: any, getState: any) => {
    const formdata = new FormData();
    formdata.append('followed_id', obj.id);
    type == types.FOLLOWERS_TO_REMOVE && formdata.append('type', 1);
    // dispatch(GlobalAction.handleLoader(true));
    WebServices.postApiCall(
      endPoint.Unfollow,
      formdata,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data);
        if (status === common.statusCode.success && data) {
          if (data.status === true) {
            successCallback(data);

            if (type == types.FOLLOW) {
              dispatch({
                type: types.FOLLOW,
                payload: obj.id,
              });
            } else if (type == types.FOLLOWING_TO_FOLLOW) {
              dispatch({
                type: types.FOLLOWING_TO_FOLLOW,
                payload: obj.id,
              });
            } else if (type == types.FOLLOWERS_TO_REMOVE) {
              dispatch({
                type: types.FOLLOWERS_TO_REMOVE,
                payload: obj.id,
              });
            } else if (type == types.OTHER_PROFILE_FOLLOW_UNFOLLOW) {
              dispatch({
                type: types.OTHER_PROFILE_FOLLOW_UNFOLLOW,
                payload: obj.id,
              });
            }
          } else {
            successCallback(data);
          }
          // dispatch(GlobalAction.handleLoader(false));
          data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          // dispatch(GlobalAction.handleLoader(false));
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        // dispatch(GlobalAction.handleLoader(false));
      },
    );
  };

export const FollowersListAction =
  (
    obj: followParams,
    type: string,
    successCallback: (data?: any) => void = () => {},
  ) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true));
    WebServices.postApiCall(
      endPoint.followerslist,
      obj,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data);
        if (status === common.statusCode.success && data) {
          if (data.status === true) {
            successCallback(data);
            if (type == types.FOLLOWERS_LIST) {
              dispatch({
                type: types.FOLLOWERS_LIST,
                payload: data.data.result,
                LordMorePayload: data.data.is_next_page,
                DataCound: data.data.total_record,
              });
            } else if (type == types.OTHER_FOLLOWERS_LIST) {
              dispatch({
                type: types.OTHER_FOLLOWERS_LIST,
                payload: data.data.result,
                LordMorePayload: data.data.is_next_page,
                DataCound: data.data.total_record,
              });
            }
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

export const FollowersClearAction =
  (type: string) => (dispatch: any, getState: any) => {
    console.log('-----Followers clear');

    if (type == types.FOLLOWERS_CLEAR) {
      dispatch({
        type: types.FOLLOWERS_CLEAR,
      });
    } else if (type == types.OTHER_FOLLOWERS_LIST) {
      dispatch({
        type: types.OTHER_FOLLOWERS_CLEAR,
      });
    }
  };

export const FollowingListAction =
  (
    obj: followParams,
    type: string,
    successCallback: (data?: any) => void = () => {},
  ) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true));
    WebServices.postApiCall(
      endPoint.followinglist,
      obj,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data);
        if (status === common.statusCode.success && data) {
          if (data.status === true) {
            successCallback(data);
            if (type == types.FOLLOWING_LIST) {
              dispatch({
                type: types.FOLLOWING_LIST,
                payload: data.data.result,
                LordMorePayload: data.data.is_next_page,
                DataCound: data.data.total_record,
              });
            } else if (type == types.OTHER_FOLLOWING_LIST) {
              dispatch({
                type: types.OTHER_FOLLOWING_LIST,
                payload: data.data.result,
                LordMorePayload: data.data.is_next_page,
                DataCound: data.data.total_record,
              });
            }
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
export const FollowingClearAction =
  (type: string) => (dispatch: any, getState: any) => {
    console.log('-----Following clear');

    if (type == types.FOLLOWING_CLEAR) {
      dispatch({
        type: types.FOLLOWING_CLEAR,
      });
    } else if (type == types.OTHER_FOLLOWING_CLEAR) {
      dispatch({
        type: types.OTHER_FOLLOWING_CLEAR,
      });
    }
  };

export const ShareClearAction = () => (dispatch: any, getState: any) => {
  console.log('-----SHARE clear');
  dispatch({
    type: types.SHARE_CLEAR,
  });
};
export const ShareListAction =
  (obj: followParams, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true));
    WebServices.postApiCall(
      endPoint.followinglist,
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
              type: types.SHARE_LIST,
              payload: data.data.result,
              LordMorePayload: data.data.is_next_page,
              DataCount: data.data.total_record,
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
