import React from "react";
import EstimatesCard from "./EstimatesCard";
import "./Estimates.css";

const Estimates = () => {
  return (
    <div className="workorder">
      {/* ---------============= Estimates  Details ==========--------- */}

      {/* ---------============= Estimates  Details Header ==========--------- */}

      <div className="WorkOrderHeader">
        <h1>Your Estimates:</h1>
        <p>
          You have <strong>2 Estimates</strong>
        </p>
      </div>

      {/* ---------============= Estimates  Cards ==========--------- */}

      <div className="workordercards">
        <EstimatesCard />
        <EstimatesCard />
      </div>
    </div>
  );
};

export default Estimates;
