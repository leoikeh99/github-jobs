import React, { Fragment, useContext, useEffect } from "react";
import jobsContext from "../jobs/jobsContext";
import moment from "moment";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const JobDescription = ({ match }) => {
  const JobsContext = useContext(jobsContext);
  const { job, getJob, loading } = JobsContext;

  useEffect(() => {
    getJob(match.params.id);
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {!loading && job ? (
        <div className="description">
          <div className="first">
            <Link to="/">
              <p className="back">
                <i className="fas fa-long-arrow-alt-left"></i> Back to search
              </p>
            </Link>
            <p className="head">HOW TO APPLY</p>
            <div
              className="howToApply"
              dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
            />
          </div>
          <div className="second">
            <div className="flex">
              <h2>{job.title}</h2>
              <span className="type">{job.type}</span>
            </div>
            <p className="time">
              <i className="far fa-clock"></i>
              {moment(job.created_at).startOf("day").fromNow()}
            </p>
            <div style={{ display: "flex" }}>
              <div
                className="image"
                style={{ backgroundImage: `url(${job.company_logo})` }}
              ></div>
              <div>
                <p className="name">{job.company}</p>
                <p className="location">
                  <i className="fas fa-globe"></i> {job.location}
                </p>
              </div>
            </div>
            <div
              className="desc"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </div>
        </div>
      ) : !loading && !job ? (
        <h1 className="noResults">No results</h1>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default JobDescription;
