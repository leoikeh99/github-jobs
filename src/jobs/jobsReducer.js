import {
  GET_JOBS,
  CHECK_NEXT_PAGE,
  SET_LOADING,
  GET_JOB,
  GET_JOB_FAIL,
} from "./types";

const jobsReducer = (state, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
      };

    case CHECK_NEXT_PAGE:
      return {
        ...state,
        nextPage: action.payload.length !== 0 ? true : false,
      };

    case GET_JOB:
      return {
        ...state,
        job: action.payload,
        loading: false,
      };
    case GET_JOB_FAIL:
      return {
        ...state,
        loading: false,
        job: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default jobsReducer;
