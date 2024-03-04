import React from "react";
import { DotLoader } from "react-spinners";
import { useFetch } from "../../utils/useFetch";
import { adminUrl } from "../../utils/url";
import OrderItem from "./OrderItem";
function OrderList() {
  let token = localStorage.getItem("token");
  const { data } = useFetch(`${adminUrl}/orders`, {
    headers: {
      token,
      "access-control-allow-origin": "https://dreams-rent-agency.netlify.app/",
    },
  });
  return (
    <div>
      {data ? (
        data.map((order, i) => <OrderItem key={i} {...order} />)
      ) : (
        <DotLoader className="m-auto" color="#f76839" size={70} />
      )}
    </div>
  );
}

export default OrderList;
