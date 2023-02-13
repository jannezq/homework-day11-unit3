import { GET_JOBS_DATA } from "../actions";

const initialState = {
  jobsData: [],
};

const getJobSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_DATA:
      return {
        ...state,
        jobsData: action.payload,
      };
    default:
      return state;
  }
};

export default getJobSearchReducer;
