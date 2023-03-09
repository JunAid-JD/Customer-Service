import "./WorkOrderDetail.css";
import { Reply } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const WorkOrderDetail = () => {
  return (
    <>
      {/*  ------=============  Work Orders Detail ==========------  */}

      <div className="workorderdetail">
        {/*  ------=============  Work Orders Detail Header ==========------  */}

        <div className="WorkOrderHeader workorderdetailheader">
          <div>
            <h1>Requested On:</h1>
            <h3>02 January,2023</h3>
          </div>
          <NavLink to="/WorkOrder">
            <Button
              color="success"
              variant="contained"
              startIcon={<Reply />}
              className="aktive "
              id="HeaderReturnBtn"
            >
              Return
            </Button>
          </NavLink>
        </div>

        {/*  ------=============  Work Orders Detail Body ==========------  */}

        <div className="workorderdetailbody">
          <div className="AddressAppointment">
            {/*  ------=============  Work Orders Detail Address Box ==========------  */}

            <div className="addressCard">
              <h3>Address:</h3>
              <label htmlFor="street">Street</label>
              <input type="text" placeholder="Street..." />
              <div className="detailAddress">
                <div>
                  <label htmlFor="city">City</label>
                  <input type="text" placeholder="City..." />
                </div>
                <div>
                  <label htmlFor="state">State</label>
                  <input type="text" placeholder="State..." />
                </div>
              </div>
              <div className="detailAddress">
                <div>
                  <label htmlFor="Zip Code">Zip Code</label>
                  <input type="text" placeholder="Zip..." />
                </div>
                <div>
                  <label htmlFor="country">Country</label>
                  <select name="">
                    <option value="">Select</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Europe">Europe</option>
                    <option value="China">China</option>
                    <option value="UAE">UAE</option>
                  </select>
                </div>
              </div>
            </div>
            {/*  ------=============  Work Orders Detail Schedule Appointment Box ==========------  */}

            <div className="appointmentCard">
              {" "}
              <h3>Schedule Appointment:</h3>
              <label htmlFor="scheduleType">
                Choose your service schedule type :
              </label>
              <Button
                variant="contained"
                color="error"
                className="workorderdetailbtn"
              >
                One Time
              </Button>
              <label htmlFor="scheduleType">
                Which date works best for you ?
              </label>
              <input type="text" placeholder="Date..." />
              <label htmlFor="available">
                Your Preferred time thats works best for you :
              </label>
              <Button
                variant="contained"
                color="error"
                className="workorderdetailbtn"
              >
                First Available
              </Button>
            </div>
          </div>

          {/*  ------=============  Work Orders Detail Service Box ==========------  */}

          <div className="serviceDetailCard">
            <h3>Service Detail:</h3>
            <label htmlFor="serviceDetail">
              Please provide as much Information as you can
            </label>
            <textarea name="" rows="4" placeholder="Write..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkOrderDetail;
