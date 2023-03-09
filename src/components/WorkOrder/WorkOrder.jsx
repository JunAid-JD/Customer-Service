import "./WorkOrder.css";
import WorkOrderCard from "./WorkOrderCard";

const WorkOrder = () => {
  return (
    <div className="workorder">
      {/*  ------=============  Work Orders Header ==========------  */}

      <div className="WorkOrderHeader">
        <h1>Your Work Orders:</h1>
        <p>
          You have <strong>2 work orders</strong>
        </p>
      </div>

      {/*  ------=============  Work Orders Cards ==========------  */}
      <div className="workordercards">
        <WorkOrderCard />
        <WorkOrderCard />
      </div>
    </div>
  );
};

export default WorkOrder;
