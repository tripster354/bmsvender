import axios from 'axios';
import {store} from '../Redux/store';
// import Store from '../Redux/store';

// const {Store: store} = Store();

const BASE_URL: string = 'https://honeydew-magpie-887435.hostingersite.com/api/';
const Youtube_API_Key: string = 'AIzaSyALAhIiEWn2ndctXqQeB-1gAqfHa9yHF70';

const $http = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    //   api_key: 2581,
    Authorization: store.getState().AuthReducer.access_token
      ? `Bearer ${store.getState().AuthReducer.access_token}`
      : 'Bearer bANNjeQhv8573c4zP4jDaLHtDSkM4SZCTOiyVJEv0bNr4RdWpP5rG64wM0vPxVihasdasd',
  },
});

$http.interceptors.request.use(function async(config) {
  // console.log('token', store.getState().AuthReducer.access_token);
  config.headers.Authorization = store.getState().AuthReducer.access_token
    ? `Bearer ${store.getState().AuthReducer.access_token}`
    : 'Bearer bANNjeQhv8573c4zP4jDaLHtDSkM4SZCTOiyVJEv0bNr4RdWpP5rG64wM0vPxVihasdasd';
  return config;
});

const $https = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    //   api_key: 2581,
    Authorization:
      'Bearer bANNjeQhv8573c4zP4jDaLHtDSkM4SZCTOiyVJEv0bNr4RdWpP5rG64wM0vPxVihasdasd',
  },
});

$https.interceptors.request.use(function async(config) {
  // console.log('token', store.getState().AuthReducer.access_token);
  config.headers.Authorization =
    'Bearer bANNjeQhv8573c4zP4jDaLHtDSkM4SZCTOiyVJEv0bNr4RdWpP5rG64wM0vPxVihasdasd';
  return config;
});

const $httpFormData = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'multipart/form-data;',
    Token: `${store.getState().AuthReducer.access_token}`,
    userType: 4,
    authorization: store.getState().AuthReducer.access_token
      ? `Bearer ${store.getState().AuthReducer.access_token}`
      : 'Bearer bANNjeQhv8573c4zP4jDaLHtDSkM4SZCTOiyVJEv0bNr4RdWpP5rG64wM0vPxVihasdasd',
  },
});

$httpFormData.interceptors.request.use(function (config) {
  console.log('token', store.getState().AuthReducer.access_token);
  config.headers.authorization = store.getState().AuthReducer.access_token
    ? `Bearer ${store.getState().AuthReducer.access_token}`
    : 'Bearer bANNjeQhv8573c4zP4jDaLHtDSkM4SZCTOiyVJEv0bNr4RdWpP5rG64wM0vPxVihasdasd';
  return config;
});

const $httpFormDatafixed = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'multipart/form-data;',
    //   api_key: 2581,
    authorization:
      'Bearer bANNjeQhv8573c4zP4jDaLHtDSkM4SZCTOiyVJEv0bNr4RdWpP5rG64wM0vPxVihasdasd',
  },
});

$httpFormDatafixed.interceptors.request.use(function (config) {
  // console.log('token', store.getState().AuthReducer.access_token);
  config.headers.authorization =
    'Bearer bANNjeQhv8573c4zP4jDaLHtDSkM4SZCTOiyVJEv0bNr4RdWpP5rG64wM0vPxVihasdasd';
  return config;
});

const STATUS_CODE = {
  success: 200,
  failed: 201,
  successAction: 201,
  notFound: 404,
  badRequest: 400,
  accountSuspend: 401,
  invalid: 422,
  timeout: 408,
  userNotFound: 410,
  userBlocked: 403,
};

const api_error_code = {
  unauthorized: 401,
  accessDenied: 430,
  sessionExpired: 440,
  validationError: 400,
  emailNotVerified: 403,
  tokenExpire: 419,
  duplicateMove: 405,
  userNotfound: 410,
  useDeactive: 403,
};

const api_success_code = {
  postSuccess: 201,
  success: 200,
};

export default {
  axiosInstance: $http,
  axiosInstanceFixed: $https,
  axiosInstanceFormData: $httpFormData,
  axiosInstanceFormDataFixed: $httpFormDatafixed,
  Youtube_API_Key,
  statusCode: STATUS_CODE,
  api_error_code,
  api_success_code,
  BASE_URL,
};
