import React from "react";
import { DotLoader } from "react-spinners";
import { useFetch } from "../../utils/useFetch";
import { adminUrl } from "../../utils/url";
import UserItem from "./UserItem";
function UserList() {
  let token = localStorage.getItem("token");
  const { data } = useFetch(`${adminUrl}/users`, token);
  // const { data } = useFetch(`http://localhost:5000/api/admin/users`, token);
  return (
    <div className="w-[100%] py-6  md:flex justify-center gap-6 flex-wrap ">
      {data ? (
        data.map((user, i) => <UserItem key={i} {...user} />)
      ) : (
        <DotLoader className="flex m-auto" color="#f76839" size={70} />
      )}
    </div>
  );
}

export default UserList;
