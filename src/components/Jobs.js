import React, { useContext } from "react";
import JobItem from "./JobItem";
import jobsContext from "../jobs/jobsContext";
import ReactPaginate from "react-paginate";
import Spinner from "./Spinner";

const Jobs = ({ page, setPage, reset }) => {
  const JobsContext = useContext(jobsContext);
  const { loading, jobs, nextPage } = JobsContext;

  const changePage = (data) => {
    setPage(data.selected + 1);
  };
  return (
    <div className="jobs">
      {!loading && jobs.length !== 0 ? (
        <ul className="jobList">
          {jobs.map((job) => (
            <JobItem job={job} key={job.id} />
          ))}
        </ul>
      ) : !loading && jobs.length === 0 ? (
        <h1 className="noResults">No results</h1>
      ) : (
        <Spinner />
      )}
      {!reset && (
        <ReactPaginate
          previousLinkClassName={"fas fa-angle-left"}
          nextLinkClassName={"fas fa-angle-right"}
          previousLabel=""
          nextLabel=""
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={nextPage ? page + 1 : page}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={changePage}
          containerClassName="pagination"
          pageLinkClassName="pagination-item"
          activeClassName="pagination-active"
        />
      )}
    </div>
  );
};

export default Jobs;
