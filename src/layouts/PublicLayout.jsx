import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
function PublicLayout({ theme, setTheme }) {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <div className="max-w-screen-2xl m-auto">
      <NavBar theme={theme} setTheme={setTheme} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PublicLayout;
