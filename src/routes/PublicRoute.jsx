import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  let token = localStorage.getItem("token");
  let isUser = localStorage.getItem("isUser");
  let isAdmin = localStorage.getItem("isAdmin");

  if (token && isUser === "true" && isAdmin === "false") {
    return <Navigate to="/profile" />;
  } else {
    return <> {children}</>;
  }
}

export default PublicRoute;
