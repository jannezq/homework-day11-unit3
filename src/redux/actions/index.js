export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS_DATA = "GET_JOBS_DATA";

export const addToFavourite = (company) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: company,
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
    console.log("...loading to fetch API for Jobs");
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
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
