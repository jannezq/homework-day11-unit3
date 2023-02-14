export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS_DATA = "GET_JOBS_DATA";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export const addToFavourite = (data) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: data,
  };
};

export const removeFromFavourite = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: i,
  };
};

export const fetchJobsDataAsync = (query) => {
  return async (dispatch) => {
    try {
      const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?search=";
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS_DATA,
          payload: data,
        });
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_JOBS_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_JOBS_ERROR,
        payload: true,
      });
    }
  };
};
