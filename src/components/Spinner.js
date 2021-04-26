import React from "react";
import image from "../images/loader.svg";

const Spinner = () => {
  return (
    <div style={style}>
      <img src={image} alt="" />
    </div>
  );
};

const style = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "30px",
  marginBottom: "30px",
};

export default Spinner;
