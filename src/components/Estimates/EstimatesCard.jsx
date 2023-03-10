import React from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import { NavLink } from "react-router-dom";
import "./EstimatesCard.css";

const EstimatesCard = ({ Approval, Color }) => {
  return (
    <div className="EstimatesCard">
      {/* ---------=============   Estimates Card   ==========--------- */}
      <Card className="card">
        {/* ---------=============   Estimates Card Header  ==========--------- */}

        <div className="cardheader">
          <button>1</button>
          <p style={{ color: Color }}>{Approval}</p>
        </div>

        {/* ---------=============   Estimates Card Time  ==========--------- */}

        <div className="requestTime">
          <label>Send:</label>
          <span>29 July,2023</span>
        </div>

        {/* ---------=============   Estimates Card Address  ==========--------- */}

        <div className="requestLocation">
          <label>Location:</label>
          <span>
            797 O'Conner Radial Kira <br /> Junction New Brain
          </span>

          {/* ---------=============   Estimates Card Button  ==========--------- */}

          <NavLink to="/EstimatesDetail">
            <Button className="WorkCardButton">View</Button>
          </NavLink>
        </div>
      </Card>
    </div>
  );
};

export default EstimatesCard;
