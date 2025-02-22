import types from '../actions/types';

const initialState = {
  registerResponse: [],
  access_token: null,
  userData: [],
  otpmodal: {visable: false},
  interestlist:[],
  selectedpostinterest:{}
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_LOADING: {
      return {...state, ...action.payload};
    }
    case types.REGISTER_USER: {
      return {...state, ...action.payload};
    }
    case types.OTP_VERIFY: {
      return {...state, ...action.payload};
    }
    case types.LOGIN: {
      return {...state, ...action.payload};
    }
    case types.LOGOUT: {
      return {...state, ...action.payload};
    }
    case types.OTP_MODAL: {
      return {...state, ...action.payload};
    }
    case types.INTEREST_LIST: {
      return {...state, ...action.payload};
    }
    case types.SELECT_POST_INTEREST: {
      return {...state,selectedpostinterest:action.payload };
    }

    default: {
      return state;
    }
  }
};

export default AuthReducer;
