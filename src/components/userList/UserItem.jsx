import React from "react";
import { Card } from "flowbite-react";
function UserItem({ createdAt, imageUrl, phone, fullName }) {
  let tIndex = createdAt.indexOf("T");
  let date = createdAt.substr(0, tIndex);
  return (
    <div className="">
      <Card className="max-w-sm">
        <div className="mb-4 flex items-center justify-between"></div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <img
                    className="rounded-full h-32 w-32"
                    src={imageUrl}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {fullName}
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    Created at: {date}
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {phone}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default UserItem;
