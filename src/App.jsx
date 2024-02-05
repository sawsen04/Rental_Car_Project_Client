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
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cars" element={<Cars />} />
        <Route path="register" element={<Register />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="aboutUs" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
