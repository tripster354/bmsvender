import { ACTIVITYINTEREST, GETALLACTIVITY, IS_LOADING, REGISTER_USER } from "./Types"


export const register_user = (data) =>{
    return {
        type: REGISTER_USER,
        payload: data
    }
}

export const ActivityInterestAction = (data) =>{
  return{
    type: ACTIVITYINTEREST,
    payload: data
  }
}

export const handleLoader = (
  isLoading,
  isFetching,
  loadingType
) => {
  return {
    type: IS_LOADING,
    payload: {
      isLoading: isFetching ? false : isLoading,
      isFetching: isFetching ?? false,
      loadingType: loadingType, // Ensure consistent naming here
    },
  };
};

export const handleAbsoluteLoader = (isAbsoluteLoading) => ({
  type: IS_LOADING,
  payload: {isAbsoluteLoading},
});

export const getActivityData = (data)=>{
  return{
    type: GETALLACTIVITY,
    payload: data
  }
}

