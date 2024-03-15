import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import ContactElt from "./ContactElt";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { TbClockHour9 } from "react-icons/tb";
// import Button from "../../components/button/Button";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
function ContacUs() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tdhmljb", "template_d08al2v", form.current, {
        publicKey: "Nk2XAFUjln8-l6HJr",
      })
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message was sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          // toast.success("Your message was sent successfully", {
          //   position: "bottom-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "colored",
          // });
          // console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "Try again",
          });
        }
      );
    e.target.reset();
  };
  return (
    <div className="bg-[#fcfbfb] mb-6">
      <div className="md:flex  justify-center gap-5 md:py-[100px] py-[60px]">
        <ContactElt
          icon={<FaPhoneVolume size={30} color="orange" />}
          title={"Phone Number"}
          detail={"(+216) 88 888 888"}
        />
        <ContactElt
          icon={<MdEmail size={30} color="orange" />}
          title={"Email Address"}
          detail={"dreamsrent@example.com"}
        />
        <ContactElt
          icon={<GrLocation size={30} color="orange" />}
          title={"Location"}
          detail={"65 street tunis,TUNISIA"}
        />
        <ContactElt
          icon={<TbClockHour9 size={30} color="orange" />}
          title={"Opening Hours"}
          detail={"Mon-Sat(10.00AM-05.30PM)"}
        />
      </div>
      <div className=" md:mx-[8%] md:flex gap-[72px] md:mb-10 ">
        <div className="md:flex items-center">
          <img
            className="md:h-[70vh] md:w-[650px]  drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-lg"
            src="https://www.revv.co.in/blogs/wp-content/uploads/2020/09/car-rental-in-India.jpg"
            alt=""
          />
        </div>
        <div>
          <section class=" bg-white dark:bg-gray-900 md:w-[600px] md:h-[85vh] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-lg">
            <div class="md:py-8 lg:py-16 md:px-4 md:mx-auto ">
              <h2 class="mb-4 md:text-4xl text-xl tracking-tight md:font-extrabold font-normal text-center text-gray-900 dark:text-white">
                Contact Us
              </h2>

              <form
                ref={form}
                onSubmit={sendEmail}
                action="#"
                class="space-y-8"
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 md:text-sm text-xs font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 md:text-sm text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="block mb-2 md:text-sm text-xs font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    class="block p-3 w-full md:text-sm text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 md:text-sm text-xs md:font-medium font-thin  text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full md:text-sm text-xs  text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                {/* <button type="submit">send message</button> */}
                <button
                  type="submit"
                  class="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700"
                >
                  <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
                  <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
                  <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
                  <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
                  <p class="z-10 absolute bottom-2 left-2">Send message</p>
                </button>
                {/* <Button
                  title={"send message"}
                  backgroundColor={"black"}
                  color={"white"}
                  border={"none"}
                /> */}
              </form>
            </div>
          </section>
        </div>
      </div>
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

export default ContacUs;
