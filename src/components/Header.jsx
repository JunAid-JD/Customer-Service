import {
  Add,
  CalendarMonth,
  MoreVert,
  Receipt,
  ShoppingBag,
  WatchLater,
} from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "./logo.png";

const Header = () => {
  const [selectPage, setSelectPage] = useState("WorkOrder");
  const handlePageBtn = (button) => {
    setSelectPage(button);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      {/* ----============= Header Left ==========---- */}

      <div className="headerLeft">
        <IconButton>
          <Avatar src={Logo} alt="user avatar" />
        </IconButton>
        <h3>Billy heating and cooling</h3>
      </div>

      {/* ----=========== Header Middle ===========---- */}

      <div className={`headerMiddle ${isMenuOpen ? "openMenu" : ""}`}>
        <NavLink exact to="/Customer-Service">
          <Button
            variant="outlined"
            startIcon={<ShoppingBag />}
            className={selectPage === "WorkOrder" ? "pageSelected" : ""}
            onClick={() => handlePageBtn("WorkOrder")}
          >
            Work Order
          </Button>
        </NavLink>

        <NavLink exact to="/Estimates">
          <Button
            variant="outlined"
            startIcon={<WatchLater />}
            className={selectPage === "Estimates" ? "pageSelected" : ""}
            onClick={() => handlePageBtn("Estimates")}
          >
            Estimates
          </Button>
        </NavLink>

        <NavLink exact to="/Appointments">
          <Button
            variant="outlined"
            startIcon={<CalendarMonth />}
            className={selectPage === "Appointments" ? "pageSelected" : ""}
            onClick={() => handlePageBtn("Appointments")}
          >
            Appointments
          </Button>
        </NavLink>

        <NavLink exact to="/Invoices">
          <Button
            variant="outlined"
            startIcon={<Receipt />}
            className={selectPage === "Invoices" ? "pageSelected" : ""}
            onClick={() => handlePageBtn("Invoices")}
          >
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
            className={
              selectPage === "NewWorkOrder  aktive" ? "pageSelected" : "aktive"
            }
            onClick={() => handlePageBtn("NewWorkOrder")}
          >
            New Work Order
          </Button>
        </NavLink>
        <IconButton onClick={toggleMenu}>
          <MoreVert className="MoreVert" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
