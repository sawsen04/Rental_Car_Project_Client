import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function SingleOrder({
  _id,
  pickUpDay,
  returnDay,
  ammount,
  carId,
  isPaid,
  createdAt,
}) {
  let tIndex = createdAt.indexOf("T");
  let date = createdAt.substr(0, tIndex);
  return (
    <div className="">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg  ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Car Model
              </th>
              <th scope="col" class="px-6 py-3">
                Car_Id
              </th>
              <th scope="col" class="px-6 py-3">
                Order_Id
              </th>
              <th scope="col" class="px-6 py-3">
                Order Date
              </th>
              <th scope="col" class="px-6 py-3">
                Pickup Day
              </th>
              <th scope="col" class="px-6 py-3">
                Drop Off Day
              </th>
              <th scope="col" class="px-6 py-3">
                Order Total
              </th>
              <th scope="col" class="px-6 py-3">
                Payment
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {carId.model}
              </th>
              <td class="px-6 py-4">
                <Link to={`/RentNow/${carId._id}`}>{carId._id}</Link>
              </td>
              <td class="px-6 py-4">{_id}</td>
              <td class="px-6 py-4">{date}</td>
              <td class="px-6 py-4">{pickUpDay}</td>
              <td class="px-6 py-4">{returnDay}</td>
              <td class="px-6 py-4">{ammount} Dt</td>
              <td class="px-6 py-4">
                {isPaid
                  ? "This order is paid ✅"
                  : " You Have 24H To Pay Your Order ⏳"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SingleOrder;
