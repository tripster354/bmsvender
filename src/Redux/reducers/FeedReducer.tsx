import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import types from '../actions/types';

// Define the state type
interface ICreatePostState {
  feedclapcard: any[];
  FCCPage: number;
  FCCMore: boolean;
  FCCLoading: boolean;
  FCCCount: number;
}

// Define the action type
interface ICreatePostAction {
  type: string;
  payload?: any;
}

// Define the initial state
const initialState: ICreatePostState = {
  feedclapcard: [],
  FCCPage: 1,
  FCCMore: true,
  FCCLoading: true,
  FCCCount: 0,
};

// Reducer function with types applied
const FeedReducer = (
  state: ICreatePostState = initialState,
  action: ICreatePostAction,
): ICreatePostState => {
  switch (action.type) {
    case types.FEED_CLAP_CARD: {
      const reset = action?.page == 1 ? true : false;
      return {
        ...state,
        feedclapcard: reset
          ? [...action.payload]
          : [...state.feedclapcard, ...action.payload],
        FCCPage: reset ? 2 : state.FCCPage + 1,
        FCCMore: action.LordMorePayload,
        FCCLoading: false,
        FCCCount: action.DataCount,
      };
    }
    case types.CLAP: {
      return {
        ...state,
        feedclapcard: state.feedclapcard.map(item => {
          // If item id matches the action.clapid, replace the item with action.singledata
          if (item.id === action.clapid) {
            return action.singledata; // Replace the entire item with singledata
          }
          return item; // Keep the original item if id doesn't match
        }),
      };
    }

    default: {
      return state;
    }
  }
};

export default FeedReducer;
