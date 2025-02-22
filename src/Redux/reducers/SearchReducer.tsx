import types from '../actions/types';

// Define the shape of the state used in the reducer
interface SearchState {
  searchinput: string;
  searchData: any[];
}

// Define the shape of the action used in the reducer
interface SearchAction {
  type: string;
  payload: Partial<SearchState>;
}

// Initial state with types defined
const initialState: SearchState = {
  searchinput: '',
  searchData: [],
};

// Reducer with explicit type annotations for state and action
const SearchReducer = (
  state: SearchState = initialState,
  action: SearchAction,
): SearchState => {
  switch (action.type) {
    case types.SEARCH_INPUT:
      return {...state, ...action.payload};
    case types.SEARCH_CONTENT:
      return {...state, ...action.payload};
    case types.FOLLOW:
      return {
        ...state,
        searchData: state.searchData.map(item =>
          item.id == action.payload
            ? {...item, followed: !item.followed}
            : item,
        ),
      };
    default:
      return state;
  }
};

export default SearchReducer;
