import { getApiResponse } from './APIHelpers';
import { actionTypeGenerator } from './APIActionTypeGenerator';

const axiosware = async () => {
  return ({ dispatch, getState }) => (next) => (action) => {
    const {
      type,
      payload: {
        key,
        url,
        headers = {},
        params = {},
        handleError = err => err,
        handleSuccess = succ => succ,
      },
    } = action

    if (isAPIAction(action)) {
      const { REQUEST, SUCCESS, FAILURE } = actionTypeGenerator(key, actionTypes);

      dispatch({
        type: REQUEST,
        key,
      });

      try {
        const response = await getApiResponse({ type, url, headers, params });

        dispatch({
          type: SUCCESS,
          key,
          response,
        });

        handleSuccess(response);
      } catch (error) {
        dispatch({
          type: FAILURE,
          key,
          response: error,
        });

        handleError(error);
      }
    }

    return next(action);
  };
}

export default axiosware;
