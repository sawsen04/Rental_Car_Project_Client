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
  const userData = useFetch(`${url}/getUserInfo`, token);
  const { data } = useFetch(`${url}/ownOrder`, token);

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
