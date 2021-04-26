import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import JobDescription from "./components/JobDescription";
import JobsState from "./jobs/JobsState";

function App() {
  return (
    <JobsState>
      <Fragment>
        <div className="container">
          <header>
            <p>
              <span>Github</span> Jobs
            </p>
          </header>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/desc/:id" component={JobDescription} />
            </Switch>
          </Router>
        </div>
      </Fragment>
    </JobsState>
  );
}

export default App;
