import React from "react";
import InvoicesCard from "./InvoicesCard";

const Invoices = () => {
  return (
    <div>
      {/* ---------=============  Invoices  ==========--------- */}

      <div className="workorder">
        {/* ---------=============  Invoices Header  ==========--------- */}

        <div className="WorkOrderHeader">
          <h1>Your Invoices:</h1>
          <p>
            You have <strong>2 Invoices</strong>
          </p>
        </div>

        {/* ---------=============  Invoices Body ==========--------- */}

        <div className="workordercards">
          {/* ---------=============  Invoices Cards  ==========--------- */}

          <InvoicesCard />
          <InvoicesCard />
        </div>
      </div>
    </div>
  );
};

export default Invoices;
