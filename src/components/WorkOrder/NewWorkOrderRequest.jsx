import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./NewWorkOrderRequest.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const NewWorkOrderRequest = () => {
  const [selectService, setSelectService] = useState("oneTime");
  const [selectTime, setSelectTime] = useState("FirstAvailable");

  const handleServiceBtn = (button) => {
    setSelectService(button);
  };
  const handleTimeBtn = (button) => {
    setSelectTime(button);
  };
  return (
    <>
      {/*  ------============= Header ==========------  */}
      <div className="mainHeader">
        <h1>NEW Work Order Request:</h1>
      </div>

      {/*  ------============= New Work Order Request ==========------  */}

      <div className="NewWorkOrderRequest">
        <h3>Contact Information:</h3>

        {/*  ------============= New Work Order Request Form ==========------  */}

        <form>
          {/*  ------============= New Work Order Request Form Left ==========------  */}

          <div className="formLeft">
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
            <label>Email</label>
            <input type="email" placeholder="Email..." />

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
            <h3>Service Detail:</h3>
            <label htmlFor="serviceDetail">
              Please provide as much Information as you can
            </label>
            <textarea name="" placeholder="Write..." />
            <label htmlFor="knowAbout">How did you here about us</label>
            <select name="">
              <option value="">Select</option>
              <option value="Website">Website</option>
              <option value="T.V">T.V</option>
              <option value="SocialMedia">Social Media</option>
              <option value="Friend">Friend</option>
            </select>

            <label htmlFor="customField">Custom Fields</label>
            <input type="text" placeholder="select" />
            <label htmlFor="customField">Custom Fields</label>
            <input type="text" placeholder="select" />
          </div>

          {/*  ------============= New Work Order Request Form Right ==========------  */}

          <div className="formRight">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
            <label>Phone Number</label>
            <input type="text" placeholder="+92..." />

            {/*  ------============= New Work Order Request Form Service Schedule ==========------  */}

            <label htmlFor="service">Choose your service schedule type:</label>
            <div className="serviceBtns">
              <Button
                variant="contained"
                className={selectService === "oneTime" ? "serviceSelected" : ""}
                onClick={() => handleServiceBtn("oneTime")}
              >
                One Time
              </Button>
              <Button
                variant="contained"
                className={
                  selectService === "EveryWeek" ? "serviceSelected" : ""
                }
                onClick={() => handleServiceBtn("EveryWeek")}
              >
                Every Week
              </Button>
              <Button
                variant="contained"
                className={
                  selectService === "Every2Weeks" ? "serviceSelected" : ""
                }
                onClick={() => handleServiceBtn("Every2Weeks")}
              >
                Every 2 weeks
              </Button>
              <Button
                variant="contained"
                className={selectService === "Monthly" ? "serviceSelected" : ""}
                onClick={() => handleServiceBtn("Monthly")}
              >
                Monthly
              </Button>
            </div>

            {/*  ------============= New Work Order Request Form Schedule Appointments ==========------  */}

            <h3>Schedule Appointments</h3>
            <label htmlFor="appointment">
              Your preferred Time & Date that works best for you.
            </label>
            <DatePicker className="MUI-Date" />
            {/* <StaticDatePicker className="MUI-Date" /> */}
            <div className="serviceBtns">
              <Button
                variant="contained"
                className={
                  selectTime === "FirstAvailable" ? "serviceSelected" : ""
                }
                onClick={() => handleTimeBtn("FirstAvailable")}
              >
                First Available
              </Button>
              <Button
                variant="contained"
                className={selectTime === "Morning" ? "serviceSelected" : ""}
                onClick={() => handleTimeBtn("Morning")}
              >
                Morning
              </Button>
              <Button
                variant="contained"
                className={selectTime === "Afternoon" ? "serviceSelected" : ""}
                onClick={() => handleTimeBtn("Afternoon")}
              >
                Afternoon
              </Button>
              <Button
                variant="contained"
                className={selectTime === "Evening" ? "serviceSelected" : ""}
                onClick={() => handleTimeBtn("Evening")}
              >
                Evening
              </Button>
            </div>

            {/*  ------============= New Work Order Request Form Submit Button ==========------  */}

            <NavLink to="/WorkOrder">
              <Button className="button" variant="contained">
                Book Now
              </Button>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewWorkOrderRequest;
