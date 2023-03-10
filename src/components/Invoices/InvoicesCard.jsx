import React from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import { NavLink } from "react-router-dom";

const InvoicesCard = ({ paid, Color }) => {
  return (
    <div>
      {/* ---------=============   Card  ==========--------- */}

      <div className="EstimatesCard">
        <Card className="card">
          <div className="cardheader">
            <button>1</button>
            <p style={{ color: Color }}>{paid}</p>
          </div>

          {/* ---------=============  Issued Date  ==========--------- */}

          <div className="requestTime">
            <label>Issued:</label>
            <span>02 March,2023</span>
          </div>

          {/* ---------============= Due Date  ==========--------- */}

          <div className="requestTime">
            <label>Due On:</label>
            <span>13 April,2023</span>
          </div>

          {/* ---------=============  Request Location  ==========--------- */}

          <div className="requestLocation">
            <label>Location:</label>
            <span>
              797 O'Conner Radial Kira <br /> Junction New Brain
            </span>

            {/* ---------=============  Button  ==========--------- */}

            <NavLink to="/InvoicesDetail">
              <Button className="WorkCardButton">View</Button>
            </NavLink>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InvoicesCard;
