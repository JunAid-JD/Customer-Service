import React from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import { NavLink } from "react-router-dom";

const AppointmentsCard = () => {
  return (
    <>
      {/* ===========----------- Appointments Card ===========------ */}

      <Card className="card">
        <button>1</button>

        {/* ===========----------- Appointments Time ===========------ */}

        <div className="requestTime">
          <label>Visit:</label>
          <span>02 March,2023</span>
        </div>

        {/* ===========----------- Appointments Address ===========------ */}

        <div className="requestLocation">
          <label>Location:</label>
          <span>797 O'Conner Radial Kira Junction New Brain</span>

          {/* ===========----------- Appointments Button  ===========------ */}

          <NavLink to="/AppointmentsDetail">
            <Button className="WorkCardButton">View</Button>
          </NavLink>
        </div>
      </Card>
    </>
  );
};

export default AppointmentsCard;
