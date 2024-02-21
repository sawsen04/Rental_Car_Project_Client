import React from "react";
import { Navigate } from "react-router-dom";

function UserRoute({ children }) {
  let token = localStorage.getItem("token");
  let isUser = localStorage.getItem("isUser");
  let isAdmin = localStorage.getItem("isAdmin");

  if (token && isUser === "true" && isAdmin === "false") {
    return <> {children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default UserRoute;
