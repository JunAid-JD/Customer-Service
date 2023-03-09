import React from "react";

import AppointmentsCard from "./AppointmentsCard";

const Appointments = () => {
  return (
    <>
      {/* ===========----------- Appointments ===========------ */}
      <div className="workorder">
        {/* ===========----------- Appointments Header ===========------ */}

        <div className="WorkOrderHeader">
          <h1>Your Appointments:</h1>
          <p>
            You have <strong>2 Appointments</strong>
          </p>
        </div>

        {/* ===========----------- Appointments Cards ===========------ */}

        <div className="workordercards">
          <AppointmentsCard />
          <AppointmentsCard />
        </div>
      </div>
    </>
  );
};

export default Appointments;
