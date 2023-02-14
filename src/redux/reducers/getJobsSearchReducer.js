import { GET_JOBS_DATA, GET_JOBS_ERROR, GET_JOBS_LOADING } from "../actions";

const initialState = {
  jobsData: [],
  isLoading: true,
  isError: false,
};

const getJobSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_DATA:
      return {
        jobsData: action.payload,
      };

    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default getJobSearchReducer;
