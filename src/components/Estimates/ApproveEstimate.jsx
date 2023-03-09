import { Close } from "@mui/icons-material";
import { Button, Card, IconButton } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./ApproveEstimate.css";

const ApproveEstimate = () => {
  return (
    <div className="ApproveEstimate">
      {/* ---------=============  Estimate Approve Card ==========--------- */}

      <Card id="ApproveEstimateCard">
        {/* ---------=============  Estimate Approve Card Header ==========--------- */}

        <div className="boxheader">
          <h3>Approve Estimate</h3>
          <NavLink to="/EstimatesDetail">
            <IconButton>
              <Close />
            </IconButton>
          </NavLink>
        </div>
        <p>Sign Below</p>

        {/* ---------=============  Estimate Approve Signatures ==========--------- */}

        <div className="boxbody">
          <textarea name="" cols="20" rows="6"></textarea>
        </div>
        <p>
          By Writing Your Signature your Accept This Estimate,and All Cost
          Associate & Any Terms & Conditions May Apply.
        </p>

        {/* ---------=============  Estimate Approve Card Buttons ==========--------- */}

        <div className="boxbtns">
          <NavLink to="/EstimatesDetail">
            <Button
              variant="contained"
              className="aktive approveestimatebtn"
              style={{ width: "100px" }}
            >
              Cancel
            </Button>
          </NavLink>
          <NavLink to="/EstimatesDetail">
            <Button
              variant="contained"
              className="aktive approveestimatebtn approvebtn"
            >
              Approve Estimate
            </Button>
          </NavLink>
        </div>
      </Card>
    </div>
  );
};

export default ApproveEstimate;
