import types from '../actions/types';

// Define the shape of the state used in the reducer
interface FollowUnfollowState {
  FollowersListData: any[];
  FollowersListPage: number;
  isMoreFollowersList: boolean;
  followerspaginationLoading: boolean;
  FollowersListDataCount: number;

  OtherFollowersListData: any[];
  OtherFollowersListPage: number;
  OtherIsMoreFollowersList: boolean;
  OtherFollowersPaginationLoading: boolean;
  OtherFollowersListDataCount: number;

  FollowingListData: any[];
  FollowingListPage: number;
  isMoreFollowingList: boolean;
  followingpaginationLoading: boolean;
  FollowingListDataCount: number;

  OtherFollowingListData: any[];
  OtherFollowingListPage: number;
  OtherIsMoreFollowingList: boolean;
  OtherFollowingPaginationLoading: boolean;
  OtherFollowingListDataCount: number;

  ShareListData: any[];
  ShareListPage: number;
  isMoreShareList: boolean;
  SharepaginationLoading: boolean;
  ShareListDataCount: number;
}

// Define the shape of the action used in the reducer
interface FollowerAction {
  type: string;
  payload: Partial<FollowUnfollowState>;
}

// Initial state with types defined
const initialState: FollowUnfollowState = {
  FollowersListData: [],
  FollowersListPage: 1,
  isMoreFollowersList: true,
  followerspaginationLoading: false,
  FollowersListDataCount: 0,

  OtherFollowersListData: [],
  OtherFollowersListPage: 1,
  OtherIsMoreFollowersList: true,
  OtherFollowersPaginationLoading: false,
  OtherFollowersListDataCount: 0,

  FollowingListData: [],
  FollowingListPage: 1,
  isMoreFollowingList: true,
  followingpaginationLoading: false,
  FollowingListDataCount: 0,

  OtherFollowingListData: [],
  OtherFollowingListPage: 1,
  OtherIsMoreFollowingList: true,
  OtherFollowingPaginationLoading: false,
  OtherFollowingListDataCount: 0,

  ShareListData: [],
  ShareListPage: 1,
  isMoreShareList: true,
  SharepaginationLoading: false,
  ShareListDataCount: 0,
};

// Reducer with explicit type annotations for state and action
const FollowUnfollowReducer = (
  state: FollowUnfollowState = initialState,
  action: FollowerAction,
): FollowUnfollowState => {
  switch (action.type) {
    case types.FOLLOWERS_LIST: {
      return {
        ...state,
        FollowersListData: [...state.FollowersListData, ...action.payload],
        FollowersListPage: state.FollowersListPage + 1,
        isMoreFollowersList: action.LordMorePayload,
        followerspaginationLoading: false,
        FollowersListDataCount: action.DataCound,
      };
    }
    case types.OTHER_FOLLOWERS_LIST: {
      return {
        ...state,
        OtherFollowersListData: [
          ...state.OtherFollowersListData,
          ...action.payload,
        ],
        OtherFollowersListPage: state.OtherFollowersListPage + 1,
        OtherIsMoreFollowersList: action.LordMorePayload,
        OtherFollowersPaginationLoading: false,
        OtherFollowersListDataCount: action.DataCound,
      };
    }
    case types.FOLLOWERS_CLEAR: {
      return {
        ...state,
        FollowersListData: [],
        FollowersListPage: 1,
      };
    }
    case types.OTHER_FOLLOWERS_CLEAR: {
      return {
        ...state,
        OtherFollowersListData: [],
        OtherFollowersListPage: 1,
      };
    }
    case types.SHARE_LIST: {
      return {
        ...state,
        ShareListData: [...state.ShareListData, ...action.payload],
        ShareListPage: state.ShareListPage + 1,
        isMoreShareList: action.LordMorePayload,
        SharepaginationLoading: false,
        ShareListDataCount: action.DataCount,
      };
    }
    case types.SHARE_CLEAR: {
      return {
        ...state,
        ShareListData: [],
        ShareListPage: 1,
      };
    }
    case types.FOLLOWING_LIST: {
      return {
        ...state,
        FollowingListData: [...state.FollowingListData, ...action.payload],
        FollowingListPage: state.FollowingListPage + 1,
        isMoreFollowingList: action.LordMorePayload,
        followingpaginationLoading: false,
        FollowingListDataCount: action.DataCound,
      };
    }
    case types.OTHER_FOLLOWING_LIST: {
      return {
        ...state,
        OtherFollowingListData: [
          ...state.OtherFollowingListData,
          ...action.payload,
        ],
        OtherFollowingListPage: state.OtherFollowingListPage + 1,
        OtherIsMoreFollowingList: action.LordMorePayload,
        OtherFollowingPaginationLoading: false,
        OtherFollowingListDataCount: action.DataCound,
      };
    }
    case types.FOLLOWING_CLEAR: {
      return {
        ...state,
        FollowingListData: [],
        FollowingListPage: 1,
      };
    }
    case types.OTHER_FOLLOWING_CLEAR: {
      return {
        ...state,
        OtherFollowingListData: [],
        OtherFollowingListPage: 1,
      };
    }
    case types.FOLLOWING_TO_FOLLOW:
      return {
        ...state,
        FollowingListData: state.FollowingListData.map(item =>
          item.user_id == action.payload
            ? {...item, followed: !item.followed}
            : item,
        ),
      };
    case types.FOLLOWERS_TO_REMOVE:
      return {
        ...state,
        FollowersListData: state.FollowersListData.filter(
          item => item.user_id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default FollowUnfollowReducer;
