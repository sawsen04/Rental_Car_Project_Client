import React from "react";
import "./profile.css";
import { url } from "../../utils/url";
import { DotLoader } from "react-spinners";
import { useFetch } from "../../utils/useFetch";
import SingleOrder from "../../components/order/SingleOrder";
import UserInfoCard from "../../components/userInfo/UserInfoCard";

const token = localStorage.getItem("token");
function Profile() {
  const { data } = useFetch(`${url}/ownOrder`, token);
  const userData = useFetch(`${url}/getUserInfo`, token);
 
  return (
    <div>
      <div className="user-infos">
        <UserInfoCard {...userData.data} />
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
