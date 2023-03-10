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
        <EstimatesCard Approval="Waiting for Approval" Color="#E73844" />
        <EstimatesCard Approval="Approved" Color="#90ee90" />
      </div>
    </div>
  );
};

export default Estimates;
