import types from '../actions/types';

// Define the shape of the state used in the reducer
interface homeState {
  activitydata: any[];
  APage: number;
  AMore: boolean;
  ALoading: boolean;
  ACount: number;
}

// Define the shape of the action used in the reducer
interface HomeAction {
  type: string;
  payload: Partial<homeState>;
}

// Initial state with types defined
const initialState: homeState = {
  activitydata: [],
  APage: 1,
  AMore: true,
  ALoading: false,
  ACount: 0,
};

// Reducer with explicit type annotations for state and action
const HomeReducer = (
  state: homeState = initialState,
  action: HomeAction,
): homeState => {
  switch (action.type) {
    case types.GET_ALL_ACTIVITY: {
      const reset = action?.page == 1 ? true : false;
      return {
        ...state,
        activitydata: reset
          ? [...action.payload]
          : [...state.activitydata, ...action.payload],
        APage: reset ? action.page : state.APage + 1,
        AMore: action.LordMorePayload,
        ALoading: false,
        ACount: action.DataCount,
      };
    }
    default:
      return state;
  }
};

export default HomeReducer;
