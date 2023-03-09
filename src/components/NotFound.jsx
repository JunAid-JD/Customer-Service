import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        Page Not Found
      </h1>

      <NavLink to="/">Back to Home</NavLink>
    </div>
  );
};

export default NotFound;
