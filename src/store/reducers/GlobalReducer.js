import types from '../actions/types';

const initialState = {
  isLoading: false,
  isAbsoluteLoading: false,
  isFetching: false,
  data: [],
  loadingType: '', // Match the case here
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_LOADING: {
      return {
        ...state,
        ...action.payload,
        isFetching: action.payload?.isFetching || false,
      };
    }
    case types.GET_API: {
      return {...state, ...action.payload};
    }
    default: {
      return state;
    }
  }
};


export default globalReducer;
