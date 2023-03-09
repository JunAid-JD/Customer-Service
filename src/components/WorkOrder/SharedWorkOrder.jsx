import React from "react";
import { Outlet } from "react-router";

const SharedWorkOrder = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SharedWorkOrder;
