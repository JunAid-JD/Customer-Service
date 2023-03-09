import {
  Add,
  CalendarMonth,
  MoreVert,
  Receipt,
  ShoppingBag,
  WatchLater,
} from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* ----============= Header Left ==========---- */}

      <div className="headerLeft">
        <IconButton>
          <Avatar src="vite.svg" />
        </IconButton>
        <h3>Billy heating and cooling</h3>
      </div>

      {/* ----=========== Header Middle ===========---- */}

      <div className="headerMiddle">
        <NavLink exact to="/">
          <Button variant="outlined" startIcon={<ShoppingBag />}>
            Work Order
          </Button>
        </NavLink>

        <NavLink exact to="/Estimates">
          <Button variant="outlined" startIcon={<WatchLater />}>
            Estimates
          </Button>
        </NavLink>

        <NavLink exact to="/Appointments">
          <Button variant="outlined" startIcon={<CalendarMonth />}>
            Appointments
          </Button>
        </NavLink>

        <NavLink exact to="/Invoices">
          <Button variant="outlined" startIcon={<Receipt />}>
            Invoices
          </Button>
        </NavLink>
      </div>

      {/* ----============ Header Right =======---- */}

      <div className="headerRight">
        <NavLink exact to="/AddNewWorkOrder">
          <Button
            variant="contained"
            startIcon={<Add />}
            className="aktive "
            id="HeaderAddBtn"
          >
            New Work Order
          </Button>
        </NavLink>
        <IconButton>
          <MoreVert className="MoreVert" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
