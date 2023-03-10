import { Button } from "@mui/material";
import "./AddNewWorkOrder.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

const AddNewWorkOrder = () => {
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
      {/* ===========----------- Add New Work Order  ===========------ */}

      {/* ===========----------- Add New Work Header  ===========------ */}

      <div className="AddNewWorkOrderHeader">
        <h1>Add New Work Order </h1>
      </div>

      {/* ===========----------- Add New Work Body  ===========------ */}

      <div className="NewWorkOrderRequest">
        {/* ===========----------- Add New Work Form  ===========------ */}

        <form>
          <div className="formLeft">
            {/* ===========----------- Add New Work Address  ===========------ */}

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

            {/* ===========----------- Add New Work Service  ===========------ */}

            <h3>Service Detail:</h3>
            <label htmlFor="serviceDetail">
              Please provide as much Information as you can
            </label>
            <textarea name="" placeholder="Write..." />
          </div>

          {/* ===========----------- Add New Work Service Schedule   ===========------ */}

          <div className="formRight">
            <label htmlFor="service">Choose your service schedule type:</label>

            {/* ===========----------- Add New Work Service Button ===========------ */}

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

            {/* ===========----------- Add New Work Schedule Appointments  ===========------ */}

            <h3>Schedule Appointments</h3>
            <label htmlFor="appointment">
              Your preferred Time & Date that works best for you.
            </label>
            <DatePicker className="MUI-Date" />

            {/* ===========----------- Add New Work Schedule Button  ===========------ */}

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

            {/* ===========----------- Add New Work Submit Button  ===========------ */}

            <Button className="button" color="error" variant="contained">
              Book Now
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewWorkOrder;
