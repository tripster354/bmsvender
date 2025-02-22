import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import types from '../actions/types';

// Define the state type
interface RewardState {
  rewardlist: any[];
  RPage: number;
  RMore: boolean;
  RLoading: boolean;
  RCount: number;
  productHistory: any[];
}

// Define the action type
interface RewardAction {
  type: string;
  payload?: any;
}

// Define the initial state
const initialState: RewardState = {
  rewardlist: [],
  RPage: 1,
  RMore: true,
  RLoading: true,
  RCount: 0,
  productHistory: [],
};

// Reducer function with types applied
const RewardReducer = (
  state: RewardState = initialState,
  action: RewardAction,
): RewardState => {
  switch (action.type) {
    case types.REWARD_LIST: {
      const reset = action?.page == 1 ? true : false;
      return {
        ...state,
        rewardlist: reset
          ? [...action.payload]
          : [...state.rewardlist, ...action.payload],
        RPage: reset ? 2 : state.RPage + 1,
        RMore: action.LordMorePayload,
        RLoading: false,
        RCount: action.DataCount,
      };
    }
    case types.PRODUCT_HISTORY: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default RewardReducer;
