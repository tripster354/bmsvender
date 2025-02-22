import { combineReducers, AnyAction } from 'redux';
import AuthReducer from './AuthReducer';
import GlobalReducer from './GlobalReducer';
import HomeReducer from './HomeReducer';
import ProfileReducer from './ProfileReducer';
import FeedReducer from './FeedReducer';
import SearchReducer from './SearchReducer';
import FollowUnfollowReducer from './FollowUnfollowReducer';
import CreateReducer from './CreateReducer';
import MenuReducer from './MenuReducer';
import RewardReducer from './RewardReducer';

// Combine all your reducers
const appReducer = combineReducers({
  AuthReducer,
  GlobalReducer,
  HomeReducer,
  CreateReducer,
  ProfileReducer,
  FeedReducer,
  SearchReducer,
  FollowUnfollowReducer,
  MenuReducer,
  RewardReducer
});

// RootState Type
export type RootState = ReturnType<typeof appReducer>;

// Define the rootReducer function with typing
export const rootReducer = (state: RootState | undefined, action: AnyAction): RootState => {
  console.log(action.type, 'type');
  
  if (action.type === 'LOGOUT') {
    // Reset the state by passing undefined to appReducer
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
