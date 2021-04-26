import React from "react";
import { useReducer } from "react";
import JobsReducer from "./jobsReducer";
import JobsContext from "./jobsContext";
import axios from "axios";

import {
  GET_JOBS,
  CHECK_NEXT_PAGE,
  SET_LOADING,
  GET_JOB,
  GET_JOB_FAIL,
} from "./types";

const JobsState = (props) => {
  const initialState = { loading: false, jobs: [], nextPage: null, job: null };
  const [state, dispatch] = useReducer(JobsReducer, initialState);

  const getJobs = async (queryString, page) => {
    try {
      const url = queryString + `&page=${page + 1}`;
      const url2 = queryString + `&page=${page}`;
      dispatch({ type: SET_LOADING });
      const res = await axios.get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
      );
      const res2 = await axios.get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(url2)}`
      );
      dispatch({
        type: CHECK_NEXT_PAGE,
        payload: JSON.parse(res.data.contents),
      });
      dispatch({ type: GET_JOBS, payload: JSON.parse(res2.data.contents) });
    } catch (err) {
      console.error(err);
    }
  };

  const getJob = async (id) => {
    try {
      dispatch({ type: SET_LOADING });
      const url = `https://jobs.github.com/positions/${id}.json`;
      const res = await axios.get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
      );
      dispatch({ type: GET_JOB, payload: JSON.parse(res.data.contents) });
    } catch (err) {
      dispatch({ type: GET_JOB_FAIL });
    }
  };

  return (
    <JobsContext.Provider
      value={{
        loading: state.loading,
        jobs: state.jobs,
        nextPage: state.nextPage,
        job: state.job,
        getJobs,
        getJob,
      }}
    >
      {props.children}
    </JobsContext.Provider>
  );
};

export default JobsState;
