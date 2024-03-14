import React from "react";
import pattern from "../../assets/pattern.jpeg";
import PlayStore from "../../assets/PlayStore.png";
import AppStore from "../../assets/AppStore.png";
const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};
function AppSec() {
  return (
    <div className="container pb-40 bg-white dark:bg-black dark:text-white">
      <div
        className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={bannerImg}
      >
        <div>
          <div className="space-y-6 md:max-w-xl max-w-sm md:mx-auto">
            <h1
              data-aos="fade-up"
              className="md:text-2xl text-xl text-center sm:text-4xl font-semibold"
            >
              Get Started with our app
            </h1>
            <p data-aos="fade-up" className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, Lorem ipsum dolor sit.
            </p>
            <div
              data-aos="fade-up"
              className="md:flex md:flex-wrap justify-center items-center gap-4"
            >
              <a href="#/">
                <img
                  src={PlayStore}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#/">
                <img
                  src={AppStore}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppSec;
