import "./WorkOrderCard.css";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import { NavLink } from "react-router-dom";

const WorkOrderCard = () => {
  return (
    <div>
      {/*  ------=============  Work Orders Card ==========------  */}

      <Card className="card">
        <button>1</button>
        {/*  ------=============  Work Orders Card Time ==========------  */}

        <div className="requestTime">
          <label>Requested On:</label>
          <span>02 March,2023</span>
        </div>

        {/*  ------=============  Work Orders Card Location ==========------  */}

        <div className="requestLocation">
          <label>Location:</label>
          <span>797 O'Conner Radial Kira Junction New Brain</span>

          {/*  ------=============  Work Orders Card Button ==========------  */}

          <NavLink to="/WorkOrder/WorkOrderDetail">
            <Button className="WorkCardButton">View</Button>
          </NavLink>
        </div>
      </Card>
    </div>
  );
};

export default WorkOrderCard;
