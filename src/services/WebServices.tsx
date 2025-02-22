import {AxiosResponse} from 'axios';
import {onHandleLogout} from '../Redux/actions/AuthAction';
import {store} from '../Redux/store';
import Common from '../utils/common';
import CommonFunction from '../utils/commonFunction';
import Strings from '../utils/strings';
import {number} from 'yup';
import {Alert} from 'react-native';
// import {CommonActions} from '@react-navigation/core';

const ENCRYPT_DECRYPT_KEY_STATIC = 'VopfVwOBJS6navy';
const ENCRYPT_DECRYPT_IV = 'ex3qpeEOx5xnQF0G';

interface APIParams {
  [key: string]: any;
}

interface APISuccessCallback {
  (response: ApiResponse): void;
}

interface APIErrorCallback {
  (error: any): void;
}

interface ApiResponse {
  data: any;
  status?: number;
}

/**
 *
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response
 * @param errorCallback  function for handle error response
 */
const postApiCall = (
  endPoint: string,
  params: APIParams,
  successCallback: APISuccessCallback,
  errorCallback: APIErrorCallback,
  processPercentage?: (percentage: number) => void,
) => {
  console.log({endPoint, params, successCallback});
  Common.axiosInstanceFormData
    .post<AxiosResponse>(endPoint, params, {
      onUploadProgress: progressEvent => {
        var Percentage = Math.round(
          (progressEvent.loaded / progressEvent.total) * 100,
        );
        console.log('Percentage_______', Percentage);
        if (typeof processPercentage === 'function') {
          processPercentage(Percentage);
        }
      },
    })
    .then(response => {
      successCallback({...response, data: response.data});
    })
    .catch(error => {
      console.log('API Call error', error);
      // Alert.alert('err', error);
      // Alert.alert('Error', error, [{text: 'OK'}]);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.userNotfound:
            CommonFunction.showAlert(
              Strings.userNotFound,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },
              () => {},
              true,
            );
            break;
          // case Common.api_error_code.unauthorized:
          //   CommonFunction.showAlert(
          //     Strings.alert,
          //     message,
          //     undefined,
          //     undefined,
          //     () => {
          //       logOutApiCall();
          //     },
          //     () => {},
          //     true,
          //   );
          //   break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};

const postApiCallFixed = (
  endPoint: string,
  params: APIParams,
  successCallback: APISuccessCallback,
  errorCallback: APIErrorCallback,
) => {
  console.log({endPoint, params, successCallback});
  Common.axiosInstanceFormDataFixed
    .post<AxiosResponse>(endPoint, params)
    .then(response => {
      successCallback({...response, data: response.data});
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },
              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};

/**
 *
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response
 * @param errorCallback  function for handle error response
 */
const postFormDataApiCall = (
  endPoint: string,
  params: APIParams,
  successCallback: APISuccessCallback,
  errorCallback: APIErrorCallback,
) => {
  console.log({endPoint, params, successCallback});
  Common.axiosInstance
    .post<AxiosResponse>(endPoint, params)
    .then(response => {
      successCallback({...response, data: response.data});
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },
              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};

/**
 *
 * @param endPoint api end point
 * @param params api url parameter
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */

/**
 *
 * @param endPoint api end point
 * @param params api url parameter
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
const getApiCall = (
  endPoint: string,
  params: '',
  successCallback: APISuccessCallback,
  errorCallback: APIErrorCallback,
) => {
  console.log({endPoint, params});
  console.log(
    'BASE_URL***********',
    Common.BASE_URL + endPoint + '?' + params,
    {},
  );

  Common.axiosInstance
    .get<AxiosResponse>(Common.BASE_URL + endPoint + '?' + params, {})
    .then(response => {
      successCallback({...response, data: response.data});
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        console.log('data', data);
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },
              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};

/**
 *
 * @param endPoint api end point
 * @param params api request data
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */

/**
 *
 * @param endPoint api end point
 * @param params api request data
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
const patchApiCall = (
  endPoint: string,
  params: APIParams,
  successCallback: APISuccessCallback,
  errorCallback: APIErrorCallback,
) => {
  console.log({endPoint, params});
  Common.axiosInstance
    .patch<AxiosResponse>(endPoint, params)
    .then(response => {
      successCallback({...response, data: response.data});
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },

              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};
/**
 *
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response
 * @param errorCallback  function for handle error response
 */
const putApiCall = (
  endPoint: string,
  params: APIParams,
  successCallback: APISuccessCallback,
  errorCallback: APIErrorCallback,
) => {
  console.log({endPoint, params, successCallback});
  Common.axiosInstance
    .put<AxiosResponse>(endPoint, params)
    .then(response => {
      successCallback({...response, data: response.data});
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
      let payload = {
        data: {
          status: '',
          // message: 'Please try again later',
        },
      };
      errorCallback(payload);
    });
};
/**
 * Logout API
 */
const logOutApiCall = () => {
  store.dispatch(onHandleLogout(() => {}));
};

/**
 *
 * @param apiUrl api url point
 * @param params api url parameter
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 **/
const getApi = (
  endPoint: string,
  params: '',
  successCallback: APISuccessCallback,
  errorCallback: APIErrorCallback,
) => {
  console.log({endPoint, params});
  Common.axiosInstance
    .get(endPoint + params, {})
    .then(response => {
      successCallback({...response, data: response.data});
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        console.log('data', data);
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },
              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};

const getApifixed = (
  endPoint: string,
  params: '',
  successCallback: APISuccessCallback,
  errorCallback: APIErrorCallback,
) => {
  console.log({endPoint, params});
  Common.axiosInstanceFixed
    .get(endPoint + params, {})
    .then(response => {
      successCallback({...response, data: response.data});
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        console.log('data', data);
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },
              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};

/**
 * Global API multi purpose handler
 * @param payload
 * @param dropdown
 */

const handleApiError = (payload: any) => {
  try {
    if (payload.status === 419) {
    } else {
      if (payload.data.message.length > 0) {
        CommonFunction.showToast(payload.data.message);
        console.log(payload.data, 'error data');
      }
    }
  } catch (error) {}
};

/**
 * Refresh token API, call when session has been expire
 * @param payload
 * @param dropdown
 */

// const refreshToken = async (callback) => {
//   Common.axiosInstance
//     .post(EndPoint.token.refresh, {
//       refresh_token: store.getState().UserReducer.refresh_token,
//     })
//     .then((respone) => {
//       console.log('my new token', respone);
//       const {statusCode, data} = respone.data;
//       if (statusCode === Common.statusCode.success) {
//         store.dispatch(
//           UserAction.updateAccessRefreshToken(
//             data.access_token,
//             data.refresh_token,
//           ),
//         );
//         callback(true);
//       } else if (statusCode === 400) {
//         throw 400;
//       }
//       callback(false);
//     })
//     .catch((error) => {
//       Common.showAlert(
//         'Session Expired !!',
//         'Your session is expired. Please login again.',
//         () => logOutApiCall(),
//         () => {},
//       );
//     });
// };
/**
 * export all function
 */
export default {
  getApi,
  getApifixed,
  putApiCall,
  getApiCall,
  postApiCall,
  postApiCallFixed,
  postFormDataApiCall,
  patchApiCall,
  logOutApiCall,
  handleApiError,
};
