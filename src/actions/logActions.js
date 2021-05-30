import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

// The below is commented just to show one possibility of handling the action
// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading(true);

//     const res = await fetch("/logs");
//     const data = await res.json();

//     dispatch({
//         type: GET_LOGS,
//         payload: data
//     })
//   };
// };
// The code below will do the same as above (with the addition of error handling)

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading(true);

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
