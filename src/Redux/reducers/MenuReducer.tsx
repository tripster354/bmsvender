import types from '../actions/types';

// Define the shape of the state used in the reducer
interface MenuState {
  menulist: any[];
  MLPage: number;
  MLMore: boolean;
  MLLoading: boolean;
  MLCount: number;
}

// Define the shape of the action used in the reducer
interface MenuAction {
  type: string;
  payload: Partial<MenuState>;
}

// Initial state with types defined
const initialState: MenuState = {
  menulist: [],
  MLPage: 1,
  MLMore: false,
  MLLoading: true,
  MLCount: 0,
};

// Reducer with explicit type annotations for state and action
const MenuReducer = (
  state: MenuState = initialState,
  action: MenuAction,
): MenuState => {
  switch (action.type) {
    case types.MENU_LIST: {
      console.log('action?.page', action?.page);
      const reset = action?.page == 1 ? true : false;
      return {
        ...state,
        menulist: reset
          ? [...action.payload]
          : [...state.menulist, ...action.payload],
        MLPage: reset ? action.page : state.MLPage + 1,
        MLMore: action.LordMorePayload,
        MLLoading: false,
        MLCount: action.DataCount,
      };
    }
    default:
      return state;
  }
};

export default MenuReducer;
