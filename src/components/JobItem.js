import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const JobItem = ({ job }) => {
  return (
    <Link to={`/desc/${job.id}`}>
      <li>
        <div
          className="logo"
          style={{ backgroundImage: `url(${job.company_logo})` }}
        >
          {!job.company_logo && (
            <div className="noImage">
              <p>not found</p>
            </div>
          )}
        </div>
        <div className="other">
          <p className="name">{job.company}</p>
          <p className="title">{job.title}</p>
          <div className="spaceOut" style={{ flexWrap: "wrap" }}>
            <p className="type">{job.type}</p>
            <div>
              <p className="location">
                <i className="fas fa-globe"></i> {job.location}
              </p>
              <p className="time">
                <i className="far fa-clock"></i>
                {moment(job.created_at).startOf("day").fromNow()}
              </p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default JobItem;
