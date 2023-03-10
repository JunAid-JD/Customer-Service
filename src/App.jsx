import React from "react";
import "./App.css";
import Header from "./components/Header";
import NewWorkOrderRequest from "./components/WorkOrder/NewWorkOrderRequest";
import WorkOrder from "./components/WorkOrder/WorkOrder";
import WorkOrderDetail from "./components/WorkOrder/WorkOrderDetail";
import AddNewWorkOrder from "./components/AddNewWorkOrder/AddNewWorkOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import SharedWorkOrder from "./components/WorkOrder/SharedWorkOrder";
import Estimates from "./components/Estimates/Estimates";
import EstimatesDetail from "./components/Estimates/EstimatesDetail";
import ApproveEstimate from "./components/Estimates/ApproveEstimate";
import RequestChanges from "./components/Estimates/RequestChanges";
import Appointments from "./components/Appointments/Appointments";
import AppointmentsDetail from "./components/Appointments/AppointmentsDetail";
import Invoices from "./components/Invoices/Invoices";
import InvoicesDetail from "./components/Invoices/InvoicesDetail";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* ---------============= Header ==========--------- */}

        <Header />

        {/* ---------============= Header ==========--------- */}
        <div className="body">
          {/* ---------=============  Work Order ==========--------- */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Routes>
              <Route
                path="/Customer-Service"
                element={<NewWorkOrderRequest />}
              />
              <Route path="/WorkOrder" element={<SharedWorkOrder />}>
                <Route index element={<WorkOrder />} />
                <Route
                  path="/WorkOrder/WorkOrderDetail"
                  element={<WorkOrderDetail />}
                />
              </Route>

              {/* ---------=============  Estimates ==========--------- */}

              <Route path="Estimates" element={<Estimates />}></Route>
              <Route path="EstimatesDetail" element={<EstimatesDetail />} />
              <Route path="ApproveEstimate" element={<ApproveEstimate />} />
              <Route path="RequestChanges" element={<RequestChanges />} />

              {/* ---------=============  Appointments ==========--------- */}

              <Route path="Appointments" element={<Appointments />} />
              <Route
                path="AppointmentsDetail"
                element={<AppointmentsDetail />}
              />

              {/* ---------=============  Invoices ==========--------- */}

              <Route path="Invoices" element={<Invoices />} />
              <Route path="InvoicesDetail" element={<InvoicesDetail />} />

              {/* ---------=============  Add New Work Order ==========--------- */}

              <Route path="/AddNewWorkOrder" element={<AddNewWorkOrder />} />

              {/* ---------=============  404 Page Not Found ==========--------- */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LocalizationProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
