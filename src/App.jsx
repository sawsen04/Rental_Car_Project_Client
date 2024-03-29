import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import PublicLayout from "./layouts/PublicLayout";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Cars from "./pages/cars/Cars";
import Register from "./pages/register/Register";
import ContactUs from "./pages/contactUs/ContacUs";
import AboutUs from "./pages/aboutUs/AboutUs";
import RentNow from "./pages/rentOrder/RentNow";
//import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";

import Users from "./pages/users/Users";
import AdminProfile from "./pages/adminProfile/AdminProfile";
import Orders from "./pages/ordersDashboard/Orders";
import AddProduct from "./pages/addProductDashboard/AddProduct";
function App() {
  const [theme, setTheme] = useState("light");
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      // localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      // localStorage.setItem("theme", "light");
    }
  });
  return (
    <Routes>
      <Route
        path="/"
        element={<PublicLayout theme={theme} setTheme={setTheme} />}
      >
        <Route
          index
          element={<LandingPage theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="profile"
          element={
            <UserRoute>
              <Profile />
            </UserRoute>
          }
        />
        {/* <Route
          path="dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        /> */}
        <Route
          path="users"
          element={
            <AdminRoute>
              <Users />
            </AdminRoute>
          }
        />
        <Route
          path="adminProfile"
          element={
            <AdminRoute>
              <AdminProfile />
            </AdminRoute>
          }
        />
        <Route
          path="orders"
          element={
            <AdminRoute>
              <Orders />
            </AdminRoute>
          }
        />
        <Route
          path="addProduct"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
        <Route path="cars" element={<Cars />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="RentNow/:id" element={<RentNow />} />
      </Route>
    </Routes>
  );
}

export default App;
