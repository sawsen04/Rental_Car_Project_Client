import React from "react";
import OrderList from "../../components/ordersDachboard/OrderList";
import SideBar from "../adminDashboard/SideBar";

function Orders() {
  return (
    <div className="md:flex w-[100%]">
      <SideBar />
      <OrderList />
    </div>
  );
}

export default Orders;
