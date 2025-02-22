const ActionTypes: {[key: string]: string} = {
  SET_APP_INTRO: 'SET_APP_INTRO',

  // Global action types
  IS_LOADING: 'IS_LOADING',
  NETWORK: 'NETWORK',
  GET_API: 'GET_API',

  // Auth action types
  REGISTER_USER: 'REGISTER_USER',
  OTP_VERIFY: 'OTP_VERIFY',
  LOGIN: 'LOGIN',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  LOGOUT: 'LOGOUT',

  // home action types
  CAMPAIGN_LIST: 'CAMPAIGN_LIST',
  NEW_USER: 'NEW_USER',
  CATEGORY_LIST: 'CATEGORY_LIST',
  RANDOM_USER: 'RANDOM_USER',
  TRENDING_USER: 'TRENDING_USER',
  TRENDING_INTERVIEW: 'TRENDING_INTERVIEW',
  GET_ALL_ACTIVITY: 'GET_ALL_ACTIVITY',

  // profile action types
  MY_NOMINATIONS: 'MY_NOMINATIONS',
  USER_DETAIL: 'USER_DETAIL',
  USER_UPDATE: 'USER_UPDATE',
  CLAP_CARD_STATUS: 'CLAP_CARD_STATUS',
  INTERVIEW_LIST: 'INTERVIEW_LIST',
  OTHER_INTERVIEW_LIST: 'OTHER_INTERVIEW_LIST',
  DELETE_CLAPCARD: 'DELETE_CLAPCARD',
  INTERVIEW: 'INTERVIEW',
  OTHER_CLAP_CARD: 'OTHER_CLAP_CARD',
  OTHER_USER_DETAIL: 'OTHER_USER_DETAIL',

  // create action types
  ACTIVITY_INTEREST: 'ACTIVITY_INTEREST',
  SELECTED_LOCATION_DATA_GET_CLEAR: 'SELECTED_LOCATION_DATA_GET_CLEAR',
  SELECTED_LOCATION_DATA_GET: 'SELECTED_LOCATION_DATA_GET',
  CREATE_ACTIVITY: 'CREATE_ACTIVITY',

  //feed action types
  FEED_CLAP_CARD: 'FEED_CLAP_CARD',

  //reward action types
  REWARD_LIST: 'REWARD_LIST',
  BUY_PRODUCT: 'BUY_PRODUCT',
  PRODUCT_HISTORY: 'PRODUCT_HISTORY',

  //search action types
  SEARCH_CONTENT: 'SEARCH_CONTENT',
};

export default ActionTypes;
