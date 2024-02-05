import React from "react";
import { popularCarData } from "../../popularCarsHome";
import { CgCalendarDates } from "react-icons/cg";
import { AiFillDashboard } from "react-icons/ai";
import { GiSteeringWheel } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdCarRental } from "react-icons/md";
import Button from "../button/Button";
function SecThree() {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-semibold mb-3"
          >
            Explore Most Popular Cars
          </h1>
          <p data-aos="fade-up" className="text-sm">
            Lorem Ipsum has been the industry's standard dummy text
          </p>
          <p data-aos="fade-up" className="text-sm pb-10">
            ever since the 1500s,
          </p>
        </div>
        <div data-aos="fade-up" className="flex justify-center gap-10 m-10 ">
          <Button
            icon={
              <img
                src="https://uploads.audi-mediacenter.com/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_web_2880.jpg?1698171883"
                width={20}
                alt=""
              />
            }
            title={"Audi"}
            backgroundColor={"white"}
            color={"black"}
            border={"1px black solid"}
          />
          <Button
            icon={
              <img
                src="https://static.moniteurautomobile.be/imgcontrol/images_tmp/clients/moniteur/c680-d465/content/medias/images/news/36000/300/40/575723_v6.jpg"
                width={30}
                alt=""
              />
            }
            title={"Kia"}
            backgroundColor={"white"}
            color={"black"}
            border={"1px black solid"}
          />

          <Button
            icon={
              <img
                src="https://live.staticflickr.com/3607/3554812654_2ba9bc0566_b.jpg"
                width={30}
                alt=""
              />
            }
            title={"chevrolet"}
            backgroundColor={"white"}
            color={"black"}
            border={"1px black solid"}
          />
          <Button
            icon={
              <img
                src="https://media.graphiline.com/src/images/news/articles/ima-image-34349.png"
                width={30}
                alt=""
              />
            }
            title={"Toyota"}
            backgroundColor={"white"}
            color={"black"}
            border={"1px black solid"}
          />
          <Button
            icon={
              <img
                src="https://i.pinimg.com/474x/8e/5d/fe/8e5dfe4002665a6300b4f65bb244d2e3.jpg"
                width={20}
                alt=""
              />
            }
            title={"Volkswagen"}
            backgroundColor={"white"}
            color={"black"}
            border={"1px black solid"}
          />
        </div>
        {/*car listing*/}
        <div className="">
          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className=" flex justify-center flex-wrap  gap-x-20 gap-y-10"
          >
            {popularCarData.map((data) => {
              return (
                <div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    className="p-4 relative shadow-xl shadow-slate-600 rounded-lg"
                  >
                    <img
                      src={data.imageUrl[0]}
                      alt=""
                      className="w-[350px] rounded-lg hover:scale-75 shadow-xl shadow-slate-400 duration-700"
                    />
                    <div>
                      <h1 className="w-fit py-1 px-6 rounded-lg bg-slate-300  text-sm font-semibold absolute left-6 top-5  hover:bg-primary duration-500  cursor-pointer ">
                        {data.brand}
                      </h1>
                    </div>
                    <div className="flex justify-between m-4">
                      <h2 className="text-xl font-bold ">{data.model}</h2>
                      <div className="flex gap-2 items-center">
                        <p className="text-xl font-bold text-primary">
                          {data.pricePerDay}DT
                        </p>
                        <p className="text-sm">/Day</p>
                      </div>
                    </div>
                    <div className=" flex justify-between mt-4">
                      <div className=" flex flex-col gap-3">
                        <div className="flex items-center gap-1">
                          <CgCalendarDates />
                          <p>{data.year}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <AiFillDashboard />
                          <p>{data.mileage}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-1">
                          <GiSteeringWheel />
                          <p>{data.gearBox}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <BsFillFuelPumpFill />
                          <p>{data.fuel}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg text-white bg-black flex items-center gap-2 justify-center font-bold text-lg p-2 hover:bg-primary duration-500  cursor-pointer mt-4 ">
                      <MdCarRental />
                      <button> Rent Now</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecThree;
