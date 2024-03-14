import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../adminDashboard/SideBar";
import { adminUrl } from "../../utils/url";
import axios from "axios";
import { FileInput, Label, Card, TextInput, Button } from "flowbite-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
function AddProduct() {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});
  const [imgProduct, setImgProduct] = useState();
  const [loading, setLoading] = useState(false);
  const handleAddProduct = () => {
    setLoading(true);
    let { brand, model, year, mileage, fuel, gearBox, pricePerDay } =
      productData;
    const productFormData = new FormData();
    for (let i = 0; i < imgProduct.length; i++) {
      productFormData.append("photos", imgProduct[i]);
    }
    productFormData.append("brand", brand);
    productFormData.append("model", model);
    productFormData.append("year", year);
    productFormData.append("mileage", mileage);
    productFormData.append("fuel", fuel);
    productFormData.append("gearBox", gearBox);
    productFormData.append("pricePerDay", Number(pricePerDay));
    axios
      .post(`${adminUrl}/addCar`, productFormData, {
        headers: {
          token,
          "access-control-allow-origin":
            "https://dreams-rent-agency.netlify.app",
        },
      })
      .then((res) => {
        // console.log(res);
        setLoading(false);
        setProductData({
          brand: "",
          model: "",
          year: "",
          mileage: "",
          gearBox: "",
          fuel: "",
          pricePerDay: "",
        });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "The car was added successfully",
      showConfirmButton: false,
      timer: 1500,
    });
        // toast.success("Car was added successfully", {
        //   position: "bottom-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
      })
      .catch((err) => {
        setLoading(false);
        console.dir(err);
        if (err.response.data.error.includes("Invalid token")) {
          localStorage.clear();
          navigate("/addProduct");
        }
      });
  };
  return (
    <div className=" md:flex">
      <SideBar />
      <Card className="">
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="">
              <div className=" space-x-4">
                {/* -----input photos----- */}
                <div
                  onChange={(e) => {
                    setImgProduct(e.target.files);
                  }}
                  className="files-input"
                >
                  <div>
                    <Label
                      htmlFor="multiple-file-upload"
                      value="Upload multiple files"
                    />
                  </div>
                  <FileInput name="photos" id="multiple-file-upload" multiple />
                </div>
                {/* ----input data----- */}
                <div
                  onChange={(e) => {
                    setProductData({
                      ...productData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  className=""
                >
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="base" value="Brand" />
                    </div>
                    <TextInput
                      name="brand"
                      id="base"
                      value={productData.brand}
                      type="text"
                      sizing="md"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="base" value="Model" />
                    </div>
                    <TextInput
                      value={productData.model}
                      name="model"
                      id="base"
                      type="text"
                      sizing="md"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="base" value="Year" />
                    </div>
                    <TextInput
                      name="year"
                      value={productData.year}
                      id="base"
                      type="text"
                      sizing="md"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="base" value="Mileage" />
                    </div>
                    <TextInput
                      name="mileage"
                      id="base"
                      type="text"
                      value={productData.mileage}
                      sizing="md"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="base" value="fuel" />
                    </div>
                    <TextInput
                      name="fuel"
                      value={productData.fuel}
                      id="base"
                      type="text"
                      sizing="md"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="base" value="gearBox" />
                    </div>
                    <TextInput
                      name="gearBox"
                      value={productData.gearBox}
                      id="base"
                      type="text"
                      sizing="md"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="base" value="pricePerDay" />
                    </div>
                    <TextInput
                      name="pricePerDay"
                      value={productData.pricePerDay}
                      id="base"
                      type="text"
                      sizing="md"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={() => {
              handleAddProduct();
            }}
            isProcessing={loading}
            className="w-[70%] font-bold border-spacing-2"
            color="gray"
          >
            Add Product
          </Button>
        </div>
      </Card>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}
    </div>
  );
}

export default AddProduct;
