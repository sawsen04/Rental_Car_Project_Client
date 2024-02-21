import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
function PublicLayout({ theme, setTheme }) {
  //dark mode feature
  // const [theme, setTheme] = useState("light");
  // const element = document.documentElement;
  // useEffect(() => {
  //   if (theme === "dark") {
  //     element.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     element.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // });

  //AOS Initialization
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
