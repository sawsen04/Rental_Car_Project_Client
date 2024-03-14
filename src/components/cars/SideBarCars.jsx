import React from "react";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function SideBarCars({ min, max, setMin, setMax, setGear, brand, setBrand }) {
  // console.log("brand:", brand);
  return (
    <div className="md:sticky top-[110px] bg-white dark:bg-dark dark:text-white md:h-[83vh] rounded-xl drop-shadow-[4px_4px_8px_rgba(0,0,2,2.60)]">
      <div className="md:sticky top-[110px]  md:h-[83vh] md:w-[250px] p-3 rounded-xl drop-shadow-[1px_1px_1px_orange] ">
        <div>
          <div className="filter divide-y-4 divide-slate-400/25 md:flex flex-col gap-6">
            <div className="Car-category pt-3">
              <div className=" md:flex justify-between items-center md:text-sm text-xs md:font-semibold font-normal pb-2">
                <h1 className="md:font-bold font-normal md:text-[18px] text-[15px] underline decoration-primary">
                  Car Brand
                </h1>
              </div>
              <div>
                <ul className="flex flex-col gap-2 ">
                  <li className="md:flex gap-2 md:font-medium font-normal ">
                    <input
                      className="rounded-sm"
                      type="checkbox"
                      name="brand"
                      value=""
                      checked={brand.length === 0}
                      onChange={(e) => {
                        setBrand([]);
                      }}
                    />
                    All
                  </li>
                  <li className="md:flex gap-2 font-medium">
                    <input
                      className="rounded-sm"
                      type="checkbox"
                      name="brand"
                      value="Toyota"
                      checked={brand.includes("Toyota")}
                      onChange={(e) => {
                        return e.target.checked
                          ? setBrand([...brand, e.target.value])
                          : setBrand(
                              brand.filter((elt) => elt !== e.target.value)
                            );
                      }}
                    />
                    Toyota
                  </li>
                  <li className="md:flex gap-2 md:font-medium font-normal">
                    <input
                      className="rounded-sm"
                      type="checkbox"
                      name="brand"
                      value="Kia"
                      checked={brand.includes("Kia")}
                      onChange={(e) => {
                        return e.target.checked
                          ? setBrand([...brand, e.target.value])
                          : setBrand(
                              brand.filter((elt) => elt !== e.target.value)
                            );
                      }}
                    />
                    Kia
                  </li>
                  <li className="md:flex gap-2 md:font-medium font-normal">
                    <input
                      className="rounded-sm"
                      type="checkbox"
                      name="brand"
                      value="Volkswagen"
                      checked={brand.includes("Volkswagen")}
                      onChange={(e) => {
                        return e.target.checked
                          ? setBrand([...brand, e.target.value])
                          : setBrand(
                              brand.filter((elt) => elt !== e.target.value)
                            );
                      }}
                    />
                    Volkswagen
                  </li>
                  <li className="md:flex gap-2 md:font-medium font-normal">
                    <input
                      className="rounded-sm"
                      type="checkbox"
                      name="brand"
                      value="Chevrolet"
                      checked={brand.includes("Chevrolet")}
                      onChange={(e) => {
                        return e.target.checked
                          ? setBrand([...brand, e.target.value])
                          : setBrand(
                              brand.filter((elt) => elt !== e.target.value)
                            );
                      }}
                    />
                    Chevrolet
                  </li>
                  <li className="md:flex gap-2 md:font-medium font-normal">
                    <input
                      className="rounded-sm"
                      type="checkbox"
                      name="brand"
                      value="Audi"
                      checked={brand.includes("Audi")}
                      onChange={(e) => {
                        return e.target.checked
                          ? setBrand([...brand, e.target.value])
                          : setBrand(
                              brand.filter((elt) => elt !== e.target.value)
                            );
                      }}
                    />
                    Audi
                  </li>
                </ul>
              </div>
            </div>
            <div className="Car-gearbox pt-3">
              <div className="md:flex justify-between items-center md:text-sm text-xs md:font-semibold font-medium pb-2">
                <h1 className="md:font-bold font-medium md:text-[18px] text-[15px] underline decoration-primary">
                  Gear Box
                </h1>
              </div>
              <div>
                <ul className="md:flex flex-col gap-2 ">
                  <li className="md:flex gap-2 md:font-medium font-normal">
                    <input
                      type="radio"
                      name="gear-type"
                      value=""
                      onChange={(e) => {
                        setGear(e.target.value);
                      }}
                    />
                    All
                  </li>
                  <li className="md:flex gap-2 md:font-medium font-normal">
                    <input
                      type="radio"
                      name="gear-type"
                      value="auto"
                      onChange={(e) => {
                        setGear(e.target.value);
                      }}
                    />
                    Auto
                  </li>
                  <li className="md:flex gap-2 md:font-medium font-normal">
                    <input
                      type="radio"
                      name="gear-type"
                      value="manual"
                      onChange={(e) => {
                        setGear(e.target.value);
                      }}
                    />
                    Manual
                  </li>
                </ul>
              </div>
            </div>
            <div className="Price pt-3">
              <div className=" md:flex justify-between items-center md:text-sm text-sx md:font-semibold font-normal pb-2">
                <h1 className="font-bold text-[18px] underline decoration-primary">
                  price
                </h1>
              </div>
              <div>
                <ul className="md:flex flex-col  gap-2 ">
                  <li className="flex gap-4 items-center">
                    <label className="text md:font-medium font-normal ">
                      Min
                    </label>
                    <input
                      className="md:w-[50%] w-[40%] border-x-2  border-y-4 rounded-lg border-x-blue-300 border-yellow-400 bg-white dark:bg-dark dark:text-white"
                      type="number"
                      min={100}
                      defaultValue={min}
                      onChange={(e) => {
                        setMin(e.target.value);
                      }}
                    />
                  </li>
                  <li className="flex gap-4 items-center">
                    <label className="text-black md:font-medium font-normal ">
                      Max
                    </label>
                    <input
                      className="md:w-[50%] w-[40%] border-x-2  border-y-4 rounded-lg border-x-blue-300 border-yellow-400 bg-white dark:bg-dark dark:text-white"
                      type="number"
                      max={500}
                      min={min}
                      defaultValue={max}
                      onChange={(e) => {
                        setMax(e.target.value);
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarCars;
