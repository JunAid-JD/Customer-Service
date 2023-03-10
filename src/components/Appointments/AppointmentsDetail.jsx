import React from "react";
import "./AppointmentsDetail.css";
import { Email, Reply, ShoppingBag, WatchLater } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Person1 from "./p1.jpg";
import Person2 from "./p2.jpg";

const AppointmentsDetail = () => {
  return (
    <div className="appointmentsdetail">
      {/* ===========----------- Appointments Details ===========------ */}

      {/* ===========----------- Appointments Detail Header ===========------ */}

      <div className="WorkOrderHeader workorderdetailheader">
        <div>
          <h1>Appointment 1:</h1>
        </div>
        <NavLink to="/Appointments">
          <Button
            // color="success"
            variant="contained"
            startIcon={<Reply />}
            className="aktive "
            id="HeaderReturnBtn"
          >
            Return
          </Button>
        </NavLink>
      </div>
      {/* ===========----------- Appointments Detail Body ===========------ */}

      <div className="appointmentsdetailbody">
        {/* ===========----------- Appointments Details Card ===========------ */}

        <div className="appointmentdetailleftright">
          <div className="appointmentsdetailleft">
            <p>
              Visit: <strong>22 July, 2021</strong>
            </p>

            <p style={{ color: "rgb(105 103 104)", fontWeight: "500" }}>
              797 O'Conner Radial Kira <br /> Junction New Brain
            </p>
          </div>

          {/* ===========----------- Appointments Detail Buttons ===========------ */}

          <div className="appointmentsdetailright">
            <Button
              variant="contained"
              startIcon={<Email />}
              className="aktive "
            >
              Send Message
            </Button>
            <Button
              variant="contained"
              startIcon={<WatchLater />}
              className="aktive "
            >
              View Estimate
            </Button>

            <Button
              variant="contained"
              startIcon={<ShoppingBag />}
              className="aktive "
            >
              View Work Order
            </Button>
          </div>
        </div>

        {/* ===========----------- Appointments Detail Visitoors ===========------ */}

        <div className="visitors">
          <p>Coming for visit:</p>
          <section className="visitor">
            <div className="person">
              <Avatar src={Person1} />
              <p>Jim Kage</p>
            </div>
            <div className="person">
              <Avatar src={Person2} />
              <p>John Doe</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsDetail;
