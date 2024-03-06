import React from "react";
import "./profile.css";
import { url } from "../../utils/url";
import { useFetch } from "../../utils/useFetch";
import { DotLoader } from "react-spinners";
import SingleOrder from "../../components/order/SingleOrder";
import "./profile.css";
import UserInfoCard from "../../components/userInfo/UserInfoCard";

function Profile() {
  const token = localStorage.getItem("token");
  const userData = useFetch(`${url}/getUserInfo`, {
    headers: {
      token,
      "access-control-allow-origin": "https://dreams-rent-agency.netlify.app",
    },
  });
  const { data } = useFetch(`${url}/ownOrder`, {
    headers: {
      token,
      "access-control-allow-origin": "https://dreams-rent-agency.netlify.app",
    },
  });

  // console.log(userData?.data);
  return (
    <div>
      <div className="user-infos">
        <UserInfoCard {...userData?.data} />
      </div>
      <div className="orders-list flex flex-col">
        {data ? (
          data.map((order, i) => <SingleOrder key={i} {...order} />)
        ) : (
          <DotLoader color="#f76839" size={70} className="m-auto" />
        )}
      </div>
    </div>
  );
}

export default Profile;
