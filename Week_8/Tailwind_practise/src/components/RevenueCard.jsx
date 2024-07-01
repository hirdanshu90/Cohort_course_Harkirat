/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function RevenueCard({ title, orderCount, amount }) {
  return (
    <div className="bg-white rounded shadow-md p-8">
      <div className="text-gray-700">{title}</div>

      <div className="flex justify-between pt-2">
        <div className="font-weight: 900 text-3xl hover:bg-red-700">
          Rs {amount}
        </div>
        {orderCount ? (
          <div className="flex cursor-pointer underline font-medium justify-center">
            <div className="text-blue-700">{orderCount} order(s)</div>
            <div className="text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                // eslint-disable-next-line react/no-unknown-property
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default RevenueCard;
