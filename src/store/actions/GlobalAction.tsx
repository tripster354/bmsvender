import WebServices from '../../services/WebServices';
import endPoint from '../../utils/endPoint';

import Common from '../../utils/common';
import { IS_LOADING } from './Types';

/**
 * Interface to define the shape of the global state expected by the thunk
 */
interface GlobalState {
  GlobalReducer: {
    hasNetworkConnection: boolean;
  };
}

/**
 * Action to Handle Loader
 *
 * @param isLoading - Indicates if the loader should be active
 * @param isFetching - Special condition to override isLoading
 */
const handleLoader = (
  isLoading: boolean,
  isFetching?: boolean,
  loadingType?: string, // Ensure this matches what you're expecting
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

/**
 * Action to handle absolute loading state
 *
 * @param isAbsoluteLoading - Indicates if the absolute loader should be active
 */
const handleAbsoluteLoader = (isAbsoluteLoading: boolean) => ({
  type: IS_LOADING,
  payload: {isAbsoluteLoading},
});

export default {
  handleLoader,
  handleAbsoluteLoader,
};
