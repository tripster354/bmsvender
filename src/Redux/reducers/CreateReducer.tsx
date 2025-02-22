import types from '../actions/types';

// Define the state type
interface ICreatePostState {
  activityinterest: any[];
  selectedlocationdata: string;
}

// Define the action type
interface ICreatePostAction {
  type: string;
  payload?: any;
}

// Define the initial state
const initialState: ICreatePostState = {
  activityinterest: [],
  selectedlocationdata: '',
};

// Reducer function with types applied
const CreateReducer = (
  state: ICreatePostState = initialState,
  action: ICreatePostAction,
): ICreatePostState => {
  switch (action.type) {
    case types.ACTIVITY_INTEREST: {
      return {...state, ...action.payload};
    }
    case types.SELECTED_LOCATION_DATA_GET: {
      return {...state, ...action.payload};
    }
    case types.SELECTED_LOCATION_DATA_GET_CLEAR: {
      return {...state, selectedlocationdata: ''};
    }
    default: {
      return state;
    }
  }
};

export default CreateReducer;
