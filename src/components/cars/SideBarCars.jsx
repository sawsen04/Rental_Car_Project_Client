import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function SideBarCars({ min, max, setMin, setMax, setGear, brand, setBrand }) {
  // console.log("brand:", brand);
  return (
    <div>
      <div className="sticky top-[2vh] filter border-2 bg-white border-red-500 h-[100vh] w-[250px] p-3 rounded-xl drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] ">
        <div>
          <div className="filter divide-y-4 divide-slate-400/25 flex flex-col gap-6">
            <div className="Car-category pt-3">
              <div className=" flex justify-between items-center text-sm font-semibold">
                <h1 className="font-bold text-[18px]">Car Brand</h1>
                <MdOutlineKeyboardArrowDown size={30} />
              </div>
              <div>
                <ul className="flex flex-col gap-2 ">
                  <li className="flex gap-2">
                    <input
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
                  <li className="flex gap-2">
                    <input
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
                  <li className="flex gap-2">
                    <input
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
                  <li className="flex gap-2">
                    <input
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
                  <li className="flex gap-2">
                    <input
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
                  <li className="flex gap-2">
                    <input
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
              <div className="flex justify-between items-center text-sm font-semibold">
                <h1 className="font-bold text-[18px]">Gear Box</h1>
                <MdOutlineKeyboardArrowDown size={30} />
              </div>
              <div>
                <ul className="flex flex-col gap-2 ">
                  <li className="flex gap-2">
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
                  <li className="flex gap-2">
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
                  <li className="flex gap-2">
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
              <div className=" flex justify-between items-center text-sm font-semibold">
                <h1 className="font-bold text-[18px]">price</h1>
                <MdOutlineKeyboardArrowDown size={30} />
              </div>
              <div>
                <ul className="flex flex-col gap-2 ">
                  <li className="flex gap-2">
                    <label>Min</label>
                    <input
                      className="border-2 border-black w-[70%]"
                      type="number"
                      min={100}
                      defaultValue={min}
                      onChange={(e) => {
                        setMin(e.target.value);
                      }}
                    />
                  </li>
                  <li className="flex gap-2">
                    <label htmlFor="">Max</label>
                    <input
                      className="border-2 border-black w-[70%]"
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
