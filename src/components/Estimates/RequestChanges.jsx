import React from "react";
import { Close } from "@mui/icons-material";
import { Button, Card, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

const RequestChanges = () => {
  return (
    <div className="ApproveEstimate">
      {/* ---------=============  Estimate Request Changes Card ==========--------- */}

      <Card id="ApproveEstimateCard">
        {/* ---------=============  Estimate Request Changes Card Header ==========--------- */}

        <div className="boxheader">
          <h3>Request Changes</h3>
          <NavLink to="/EstimatesDetail">
            <IconButton>
              <Close />
            </IconButton>
          </NavLink>
        </div>
        <p>Type Your Changes Below</p>

        {/* ---------=============  Estimate Request Changes Signatures ==========--------- */}

        <div className="boxbody">
          <textarea name="" cols="20" rows="6"></textarea>
        </div>

        {/* ---------=============  Estimate Request Changes Card Buttons ==========--------- */}

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
              style={{ width: "100px" }}
            >
              Send
            </Button>
          </NavLink>
        </div>
      </Card>
    </div>
  );
};

export default RequestChanges;
