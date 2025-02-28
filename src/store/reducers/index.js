import AsyncStorage from "@react-native-async-storage/async-storage";

import { combineReducers } from "redux";
import SessionReducer from "./SessionReducer";

const appReducer = combineReducers({
    SessionReducer
});

const rootReducer = (state, action) => {
    // if (action.type === 'LOGOUT') {
    //     AsyncStorage.clear();
    //     state = undefined;
    // }
    return appReducer(state, action);
}

export default rootReducer;