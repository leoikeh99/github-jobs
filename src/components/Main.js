import React, { useState, useContext, useEffect } from "react";
import Search from "./Search";
import Jobs from "./Jobs";
import Parameters from "./Parameters";
import jobsContext from "../jobs/jobsContext";
import { getQueryString } from "../functions";

const Main = () => {
  const [description, setDescription] = useState("");
  const [defaultLoc] = useState(["London", "Amsterdam", "New york", "Berlin"]);
  const [selectedLoc, selectLoc] = useState("Berlin");
  const [fulltime, setFulltime] = useState(false);
  const [page, setPage] = useState(1);
  const [reset, setReset] = useState(false);

  const JobsContext = useContext(jobsContext);
  const { getJobs } = JobsContext;

  useEffect(() => {
    getJobs(getQueryString(description, fulltime, selectedLoc), page);
    //eslint-disable-next-line
  }, [page]);

  const search = () => {
    setPage(1);
    setReset(true);
    getJobs(getQueryString(description, fulltime, selectedLoc), page);
    setTimeout(() => setReset(false), 500);
  };

  return (
    <div className="main">
      <Search
        description={description}
        setDescription={setDescription}
        search={search}
      />
      <div className="body" style={{ display: "flex" }}>
        <Parameters
          defaultLoc={defaultLoc}
          selectedLoc={selectedLoc}
          selectLoc={selectLoc}
          fulltime={fulltime}
          setFulltime={setFulltime}
          search={search}
        />
        <Jobs page={page} setPage={setPage} reset={reset} />
      </div>
    </div>
  );
};
export default Main;
