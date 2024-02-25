import React from "react";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function SideBarCars({ min, max, setMin, setMax, setGear, brand, setBrand }) {
  // console.log("brand:", brand);
  return (
    <div className="sticky top-[110px] bg-white dark:bg-dark dark:text-white h-[83vh] rounded-xl drop-shadow-[4px_4px_8px_rgba(0,0,2,2.60)]">
      <div className="sticky top-[110px]  h-[83vh] w-[250px] p-3 rounded-xl drop-shadow-[1px_1px_1px_orange] ">
        <div>
          <div className="filter divide-y-4 divide-slate-400/25 flex flex-col gap-6">
            <div className="Car-category pt-3">
              <div className=" flex justify-between items-center text-sm font-semibold pb-2">
                <h1 className="font-bold text-[18px] underline decoration-primary">
                  Car Brand
                </h1>
              </div>
              <div>
                <ul className="flex flex-col gap-2 ">
                  <li className="flex gap-2 font-medium ">
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
                  <li className="flex gap-2 font-medium">
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
                  <li className="flex gap-2 font-medium">
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
                  <li className="flex gap-2 font-medium">
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
                  <li className="flex gap-2 font-medium">
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
                  <li className="flex gap-2 font-medium">
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
              <div className="flex justify-between items-center text-sm font-semibold pb-2">
                <h1 className="font-bold text-[18px] underline decoration-primary">
                  Gear Box
                </h1>
              </div>
              <div>
                <ul className="flex flex-col gap-2 ">
                  <li className="flex gap-2 font-medium">
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
                  <li className="flex gap-2 font-medium">
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
                  <li className="flex gap-2 font-medium">
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
              <div className=" flex justify-between items-center text-sm font-semibold pb-2">
                <h1 className="font-bold text-[18px] underline decoration-primary">
                  price
                </h1>
              </div>
              <div>
                <ul className="flex flex-col  gap-2 ">
                  <li className="flex gap-4 items-center">
                    <label className="text font-medium ">Min</label>
                    <input
                      className="w-[50%] border-x-2  border-y-4 rounded-lg border-x-blue-300 border-yellow-400 bg-white dark:bg-dark dark:text-white"
                      type="number"
                      min={100}
                      defaultValue={min}
                      onChange={(e) => {
                        setMin(e.target.value);
                      }}
                    />
                  </li>
                  <li className="flex gap-4 items-center">
                    <label className="text-black font-medium">Max</label>
                    <input
                      className="w-[50%] border-x-2  border-y-4 rounded-lg border-x-blue-300 border-yellow-400 bg-white dark:bg-dark dark:text-white"
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
            {/* price */}
            {/* <div className="Price pt-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <h1 className="font-bold text-[18px]">Price</h1>
                  <MdOutlineKeyboardArrowDown size={30} />
                </div>
                <div>
                  <div className="card flex justify-content-center">
                    <div className="w-14rem ">
                      <InputText
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full"
                      />
                      <Slider
                        value={value}
                        onChange={(e) => setValue(e.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
        {/* bouton side bar */}
        {/* <div className="my-10 flex flex-col items-center gap-4">
            <Button
              icon={<TbFilter size={20} fontWeight={600} />}
              title={"Filtrer results"}
              backgroundColor={"orange"}
              color={"white"}
              border={"none"}
            />
            <Button
              title={"Reset filter"}
              backgroundColor={"orange"}
              color={"white"}
              border={"none"}
            />
          </div> */}
      </div>
    </div>
  );
}

export default SideBarCars;
