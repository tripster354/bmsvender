import WebServices from '../../services/WebServices';
import common from '../../utils/common';
import commonFunction from '../../utils/commonFunction';
import endPoint from '../../utils/endPoint';
import types from './types';
import GlobalAction from './GlobalAction';
import {Alert} from 'react-native';
import {
  clapCardData,
  interViewData,
  nomini_user_images,
} from '../../assets/Data';

export const MyNominationAction =
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
    // dispatch(GlobalAction.handleLoader(true, false, types.MY_NOMINATIONS));
    dispatch({
      type: types.MY_NOMINATIONS,
      payload: nomini_user_images,
      LordMorePayload: true,
      DataCount: 100,
      page: obj?.page || null,
    });
    dispatch(GlobalAction.handleLoader(false, false, types.MY_NOMINATIONS));
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

export const MyClapCardAction =
  (obj?: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    const {
      ProfileReducer: {CCPage},
      AuthReducer: {userData},
    } = getState();
    dispatch(GlobalAction.handleLoader(true, false, types.MY_CLAP_CARD));

    const formdata = new FormData();
    formdata.append('page', obj.page ? obj?.page : CCPage);
    formdata.append('per_page', '10');
    formdata.append('user_id', obj.id ? obj.id : userData?.id);

    WebServices.postApiCall(
      endPoint.clapcard,
      formdata,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data.data.result);
        if (status === common.statusCode.success && data) {
          if (data.status == true) {
            successCallback(data);
            dispatch({
              type: types.MY_CLAP_CARD,
              payload: data.data.data,
              LordMorePayload: CCPage < data?.data?.last_page ? true : false,
              DataCount: 100,
              page: obj?.page || null,
            });
            dispatch(
              GlobalAction.handleLoader(false, false, types.MY_CLAP_CARD),
            );
          } else {
            successCallback(data);
            dispatch(
              GlobalAction.handleLoader(false, false, types.MY_CLAP_CARD),
            );
          }
          dispatch(GlobalAction.handleLoader(false, false, types.MY_CLAP_CARD));
          // data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(GlobalAction.handleLoader(false, false, types.MY_CLAP_CARD));
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        dispatch(GlobalAction.handleLoader(false, false, types.MY_CLAP_CARD));
      },
    );
  };
export const OtherClapCardAction =
  (obj?: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    const {
      ProfileReducer: {OCCPage},
      AuthReducer: {userData},
    } = getState();
    dispatch(GlobalAction.handleLoader(true, false, types.OTHER_CLAP_CARD));

    const formdata = new FormData();
    formdata.append('page', obj.page ? obj?.page : OCCPage);
    formdata.append('per_page', '10');
    formdata.append('user_id', obj.id ? obj.id : userData?.id);

    WebServices.postApiCall(
      endPoint.clapcard,
      formdata,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data.data.result);
        if (status === common.statusCode.success && data) {
          if (data.status == true) {
            successCallback(data);
            dispatch({
              type: types.OTHER_CLAP_CARD,
              payload: data.data.data,
              LordMorePayload: OCCPage < data?.data?.last_page ? true : false,
              DataCount: 100,
              page: obj?.page || null,
            });
            dispatch(
              GlobalAction.handleLoader(false, false, types.OTHER_CLAP_CARD),
            );
          } else {
            successCallback(data);
            dispatch(
              GlobalAction.handleLoader(false, false, types.OTHER_CLAP_CARD),
            );
          }
          dispatch(
            GlobalAction.handleLoader(false, false, types.OTHER_CLAP_CARD),
          );
          // data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(
            GlobalAction.handleLoader(false, false, types.OTHER_CLAP_CARD),
          );
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        dispatch(
          GlobalAction.handleLoader(false, false, types.OTHER_CLAP_CARD),
        );
      },
    );
  };

export const UserDetailction =
  (obj?: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true, false, types.USER_DETAIL));
    const {
      AuthReducer: {userData},
    } = getState();

    const formdata = new FormData();
    formdata.append('id', obj ? obj : userData?.id);

    WebServices.postApiCall(
      endPoint.userdetail,
      formdata,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data.data.result);
        if (status === common.statusCode.success && data) {
          if (data.status == true) {
            successCallback(data);
            dispatch({
              type: types.USER_DETAIL,
              payload: {userdetail: data.data},
            });
            dispatch(
              GlobalAction.handleLoader(false, false, types.USER_DETAIL),
            );
          } else {
            successCallback(data);
          }
          dispatch(GlobalAction.handleLoader(false, false, types.USER_DETAIL));
          // data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(GlobalAction.handleLoader(false, false, types.USER_DETAIL));
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        dispatch(GlobalAction.handleLoader(false, false, types.USER_DETAIL));
      },
    );
  };

export const OtherUserDetailction =
  (obj?: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true, false, types.OTHER_USER_DETAIL));

    const formdata = new FormData();
    formdata.append('id', obj);

    WebServices.postApiCall(
      endPoint.userdetail,
      formdata,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data.data.result);
        if (status === common.statusCode.success && data) {
          if (data.status == true) {
            successCallback(data);
            dispatch({
              type: types.OTHER_USER_DETAIL,
              payload: {otheruserdetail: data.data},
            });
            dispatch(
              GlobalAction.handleLoader(false, false, types.OTHER_USER_DETAIL),
            );
          } else {
            successCallback(data);
          }
          dispatch(
            GlobalAction.handleLoader(false, false, types.OTHER_USER_DETAIL),
          );
          // data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(
            GlobalAction.handleLoader(false, false, types.OTHER_USER_DETAIL),
          );
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        dispatch(
          GlobalAction.handleLoader(false, false, types.OTHER_USER_DETAIL),
        );
      },
    );
  };
export const UserUpdatection =
  (obj: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true));
    WebServices.postApiCall(
      endPoint.userupdate,
      obj,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data);
        if (status === common.statusCode.success && data) {
          if (data.status == true) {
            successCallback(data);
            dispatch({
              type: types.USER_UPDATE,
            });
            dispatch(GlobalAction.handleLoader(false));
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
  };

export const ClapCardStatusAction =
  (obj?: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true, false, types.CLAP_CARD_STATUS));

    const {
      AuthReducer: {userData},
    } = getState();

    const formdata = new FormData();
    formdata.append('page', obj.page);
    formdata.append('per_page', '10');
    formdata.append('user_id', userData.id);

    WebServices.postApiCall(
      endPoint.clapcard,
      formdata,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data.data.result);
        if (status === common.statusCode.success && data) {
          if (data.status == true) {
            successCallback(data);
            dispatch({
              type: types.CLAP_CARD_STATUS,
              payload: data.data.data,
              LordMorePayload: obj.page < data?.data?.last_page ? true : false,
              DataCount: 100,
              page: obj?.page || null,
            });
            dispatch(
              GlobalAction.handleLoader(false, false, types.CLAP_CARD_STATUS),
            );
          } else {
            successCallback(data);
            dispatch(
              GlobalAction.handleLoader(false, false, types.CLAP_CARD_STATUS),
            );
          }
          dispatch(
            GlobalAction.handleLoader(false, false, types.CLAP_CARD_STATUS),
          );
          // data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(
            GlobalAction.handleLoader(false, false, types.CLAP_CARD_STATUS),
          );
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        dispatch(
          GlobalAction.handleLoader(false, false, types.CLAP_CARD_STATUS),
        );
      },
    );
  };

export const InterViewListAction =
  (obj?: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(GlobalAction.handleLoader(true, false, types.INTERVIEW_LIST));

    const formdata = new FormData();
    formdata.append('page', obj.page);
    formdata.append('per_page', '10');

    WebServices.postApiCall(
      endPoint.interview,
      formdata,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data.data.result);
        if (status === common.statusCode.success && data) {
          if (data.status == true) {
            successCallback(data);
            dispatch({
              type: types.INTERVIEW_LIST,
              payload: data.data.data,
              LordMorePayload: obj.page < data?.data?.last_page ? true : false,
              DataCount: 100,
              page: obj?.page || null,
            });
            dispatch(
              GlobalAction.handleLoader(false, false, types.INTERVIEW_LIST),
            );
          } else {
            successCallback(data);
            dispatch(
              GlobalAction.handleLoader(false, false, types.INTERVIEW_LIST),
            );
          }
          dispatch(
            GlobalAction.handleLoader(false, false, types.INTERVIEW_LIST),
          );
          // data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(
            GlobalAction.handleLoader(false, false, types.INTERVIEW_LIST),
          );
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        dispatch(GlobalAction.handleLoader(false, false, types.INTERVIEW_LIST));
      },
    );
  };

export const OtherInterViewListAction =
  (obj?: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    dispatch(
      GlobalAction.handleLoader(true, false, types.OTHER_INTERVIEW_LIST),
    );

    const formdata = new FormData();
    formdata.append('page', obj.page);
    formdata.append('per_page', '10');
    formdata.append('user_id', obj.id);

    WebServices.postApiCall(
      endPoint.interview,
      formdata,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data.data.result);
        if (status === common.statusCode.success && data) {
          if (data.status == true) {
            successCallback(data);
            dispatch({
              type: types.OTHER_INTERVIEW_LIST,
              payload: data.data.data,
              LordMorePayload: obj.page < data?.data?.last_page ? true : false,
              DataCount: 100,
              page: obj?.page || null,
            });
            dispatch(
              GlobalAction.handleLoader(
                false,
                false,
                types.OTHER_INTERVIEW_LIST,
              ),
            );
          } else {
            successCallback(data);
            dispatch(
              GlobalAction.handleLoader(
                false,
                false,
                types.OTHER_INTERVIEW_LIST,
              ),
            );
          }
          dispatch(
            GlobalAction.handleLoader(false, false, types.OTHER_INTERVIEW_LIST),
          );
          // data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(
            GlobalAction.handleLoader(false, false, types.OTHER_INTERVIEW_LIST),
          );
        }
      },
      (fail: any) => {
        WebServices.handleApiError(fail);
        dispatch(
          GlobalAction.handleLoader(false, false, types.OTHER_INTERVIEW_LIST),
        );
      },
    );
  };

export const DeleteClapCardction =
  (obj: any, successCallback: (data?: any) => void = () => {}) =>
  (dispatch: any, getState: any) => {
    const {
      AuthReducer: {userData},
    } = getState();

    console.log('userid', userData.id);
    console.log('obj', obj);

    dispatch(GlobalAction.handleLoader(true));

    const formdata = new FormData();
    formdata.append('clap_card_id', obj.id);
    formdata.append('user_id', userData.id);

    WebServices.postApiCall(
      endPoint.deleteclapcard,
      formdata,
      (success: any) => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data);

        if (status === common.statusCode.success && data) {
          if (data.status == true) {
            successCallback(data);
            dispatch({
              type: types.DELETE_CLAPCARD,
              payload: obj.id,
            });
            dispatch(GlobalAction.handleLoader(false));
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
  };
