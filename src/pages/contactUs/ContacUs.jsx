import React from "react";
import "./contact.css";
import ContactElt from "./ContactElt";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { TbClockHour9 } from "react-icons/tb";
import Button from "../../components/button/Button";
function ContacUs() {
  return (
    <div className="bg-[#fcfbfb]">
      <div className="flex  justify-center gap-5 py-[100px]">
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
      <div className=" mx-[8%] flex gap-[72px] mb-10 ">
        <div className="flex items-center">
          <img
            className="h-[70vh] w-[650px]  drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-lg"
            src="https://www.revv.co.in/blogs/wp-content/uploads/2020/09/car-rental-in-India.jpg"
            alt=""
          />
        </div>
        <div>
          <section class=" bg-white dark:bg-gray-900 w-[600px] h-[85vh] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-lg">
            <div class="py-8 lg:py-16 px-4 mx-auto ">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Contact Us
              </h2>

              <form action="#" class="space-y-8">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <Button
                  title={"send message"}
                  backgroundColor={"black"}
                  color={"white"}
                  border={"none"}
                />
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ContacUs;
