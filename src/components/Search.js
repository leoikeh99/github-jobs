import React, { Fragment } from "react";
import bg from "../images/bg.png";

const Search = ({ description, setDescription, search }) => {
  return (
    <div className="search">
      <Fragment>
        <img src={bg} alt="" />
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            search();
          }}
        >
          <div className="cover">
            <div style={{ display: "flex", width: "100%" }}>
              <i className="fas fa-briefcase"></i>
              <input
                type="text"
                placeholder="Title, companies, expertise or benefits"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button>Search</button>
          </div>
        </form>
      </Fragment>
    </div>
  );
};

export default Search;
