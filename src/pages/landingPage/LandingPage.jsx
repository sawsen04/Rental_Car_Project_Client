import React, { useEffect } from "react";
import "./home.css";
import Hero from "../../components/hero/Hero";
import Search from "../../components/sectionOneSearch/Search";
import HowItWorks from "../../components/sectionTwo/HowItWorks";
import SecThree from "../../components/sectionThree/SecThree";
import SecFoor from "../../components/sectionFoor/SecFoor";
import WhyShooseUs from "../../components/sectionFive/WhyShooseUs";
import AppSec from "../../components/sectionSix/AppSec";

function LandingPage({ theme }) {
  // const [theme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
  return (
    <div>
      <Hero theme={theme} />
      <Search />
      <HowItWorks />
      <SecThree />
      <SecFoor />
      <WhyShooseUs />
      <AppSec />
    </div>
  );
}

export default LandingPage;
