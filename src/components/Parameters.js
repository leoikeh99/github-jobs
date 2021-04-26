import React from "react";

const Parameters = ({
  defaultLoc,
  selectedLoc,
  selectLoc,
  fulltime,
  setFulltime,
  search,
}) => {
  return (
    <div className="parameters">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
      >
        <div className="group-item">
          <input type="checkbox" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              className={`check ${fulltime && "active2"}`}
              onClick={() => setFulltime(!fulltime)}
            >
              <i className="fas fa-check"></i>
            </div>
            <label htmlFor="" onClick={() => setFulltime(!fulltime)}>
              Full time
            </label>
          </div>
        </div>
        <p>LOCATION</p>
        <div className="cover">
          <i className="fas fa-globe"></i>
          <input
            type="text"
            placeholder="City, state, zip code or country"
            value={selectedLoc}
            onChange={(e) => selectLoc(e.target.value)}
          />
        </div>
        {React.Children.toArray(
          defaultLoc.map((loc) => (
            <div className="group-item">
              <input
                type="radio"
                checked={selectedLoc === loc}
                onChange={() => selectLoc(loc)}
              />
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  className={`radio ${selectedLoc === loc && "active"}`}
                  onClick={() => selectLoc(loc)}
                >
                  {selectedLoc === loc && <div className="checked"></div>}
                </div>
                <label htmlFor="" onClick={() => selectLoc(loc)}>
                  {loc}
                </label>
              </div>
            </div>
          ))
        )}

        <button>
          <i className="fas fa-search"></i> Search
        </button>
      </form>
    </div>
  );
};
export default Parameters;
