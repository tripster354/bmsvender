import { ACTIVITYINTEREST, IS_LOADING, REGISTER_USER } from "../actions/Types";


const intialState = {
    registerData: [],
    access_token: null,
    isLoading: false,
    isAbsoluteLoading: false,
    isFetching: false,
    activityData: [],
}


export default (state = intialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                registerData: action.payload
            }
        case IS_LOADING: {
            return {
                ...state,
                ...action.payload,
                isFetching: action.payload?.isFetching || false,
            }
        }
        case ACTIVITYINTEREST:{
            return{
                ...state,
                activityData: action.payload
            }
        }
        default:
            return state;
    }
}