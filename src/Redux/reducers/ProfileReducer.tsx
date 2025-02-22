import types from '../actions/types';

// Define the shape of the state used in the reducer
interface ProfileState {
  mynominations: any[];
  MNPage: number;
  MNMore: boolean;
  MNLoading: boolean;
  MNCount: number;
  myclapcard: any[];
  CCPage: number;
  CCMore: boolean;
  CCLoading: boolean;
  CCCount: number;
  otherclapcard: any[];
  OCCPage: number;
  OCCMore: boolean;
  OCCLoading: boolean;
  OCCCount: number;
  userdetail: any[];
  otheruserdetail: any[];
  clapcardstatus: any[];
  CCSPage: number;
  CCSMore: boolean;
  CCSLoading: boolean;
  CCSCount: number;
  interviewlist: any[];
  IPage: number;
  IMore: boolean;
  ILoading: boolean;
  ICount: number;
  otherinterviewlist: any[];
  OIPage: number;
  OIMore: boolean;
  OILoading: boolean;
  OICount: number;
}

// Define the shape of the action used in the reducer
interface MenuAction {
  type: string;
  payload: Partial<ProfileState>;
}

// Initial state with types defined
const initialState: ProfileState = {
  mynominations: [],
  MNPage: 1,
  MNMore: false,
  MNLoading: true,
  MNCount: 0,
  myclapcard: [],
  CCPage: 1,
  CCMore: false,
  CCLoading: true,
  CCCount: 0,
  otherclapcard: [],
  OCCPage: 1,
  OCCMore: false,
  OCCLoading: true,
  OCCCount: 0,
  userdetail: [],
  otheruserdetail: [],
  clapcardstatus: [],
  CCSPage: 1,
  CCSMore: false,
  CCSLoading: true,
  CCSCount: 0,
  interviewlist: [],
  IPage: 1,
  IMore: false,
  ILoading: true,
  ICount: 0,
  otherinterviewlist: [],
  OIPage: 1,
  OIMore: false,
  OILoading: true,
  OICount: 0,
};

// Reducer with explicit type annotations for state and action
const ProfileReducer = (
  state: ProfileState = initialState,
  action: MenuAction,
): ProfileState => {
  switch (action.type) {
    case types.MY_NOMINATIONS: {
      console.log('action?.page', action?.page);
      const reset = action?.page == 1 ? true : false;
      return {
        ...state,
        mynominations: reset
          ? [...action.payload]
          : [...state.mynominations, ...action.payload],
        MNPage: reset ? action.page : state.MNPage + 1,
        MNMore: action.LordMorePayload,
        MNLoading: false,
        MNCount: action.DataCount,
      };
    }
    case types.MY_CLAP_CARD: {
      const reset = action?.page == 1 ? true : false;
      return {
        ...state,
        myclapcard: reset
          ? [...action.payload]
          : [...state.myclapcard, ...action.payload],
        CCPage: reset ? action.page : state.CCPage + 1,
        CCMore: action.LordMorePayload,
        CCLoading: false,
        CCCount: action.DataCount,
      };
    }
    case types.OTHER_CLAP_CARD: {
      const reset = action?.page == 1 ? true : false;
      return {
        ...state,
        otherclapcard: reset
          ? [...action.payload]
          : [...state.otherclapcard, ...action.payload],
        OCCPage: reset ? action.page : state.OCCPage + 1,
        OCCMore: action.LordMorePayload,
        OCCLoading: false,
        OCCCount: action.DataCount,
      };
    }
    case types.CLAP_CARD_STATUS: {
      const reset = action?.page == 1 ? true : false;
      return {
        ...state,
        clapcardstatus: reset
          ? [...action.payload]
          : [...state.clapcardstatus, ...action.payload],
        CCSPage: reset ? 2 : state.CCSPage + 1,
        CCSMore: action.LordMorePayload,
        CCSLoading: false,
        CCSCount: action.DataCount,
      };
    }
    case types.USER_DETAIL: {
      return {...state, ...action.payload};
    }
    case types.INTERVIEW_LIST: {
      const reset = action?.page == 1 ? true : false;
      return {
        ...state,
        interviewlist: reset
          ? [...action.payload]
          : [...state.interviewlist, ...action.payload],
        IPage: reset ? 2 : state.IPage + 1,
        IMore: action.LordMorePayload,
        ILoading: false,
        ICount: action.DataCount,
      };
    }
    case types.OTHER_INTERVIEW_LIST: {
      const reset = action?.page == 1 ? true : false;
      return {
        ...state,
        otherinterviewlist: reset
          ? [...action.payload]
          : [...state.otherinterviewlist, ...action.payload],
        OIPage: reset ? 2 : state.OIPage + 1,
        OIMore: action.LordMorePayload,
        OILoading: false,
        OICount: action.DataCount,
      };
    }
    case types.DELETE_CLAPCARD: {
      const myclapcarddelete = state.myclapcard.filter(
        item => item.id != action.payload,
      );
      const clapcardstatusdelete = state.clapcardstatus.filter(
        item => item.id != action.payload,
      );
      return {
        ...state,
        myclapcard: myclapcarddelete,
        clapcardstatus: clapcardstatusdelete,
      };
    }
    case types.USER_DETAIL: {
      return {...state, ...action.payload};
    }
    case types.OTHER_USER_DETAIL: {
      return {...state, ...action.payload};
    }

    case types.CLAP: {
      return {
        ...state,
        otherclapcard:
          state?.otherclapcard &&
          state?.otherclapcard?.map(item => {
            // If item id matches the action.clapid, replace the item with action.singledata
            if (item.id === action.clapid) {
              return action.singledata; // Replace the entire item with singledata
            }
            return item; // Keep the original item if id doesn't match
          }),
      };
    }
    default:
      return state;
  }
};

export default ProfileReducer;
