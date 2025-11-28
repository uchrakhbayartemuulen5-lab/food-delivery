"use client";
import Link from "next/link";
import { Caricon } from "../component/icon/caricon";
import { LogoIcon } from "../component/icon/logoicon";
import { Menuicon } from "../component/icon/menuicon";
import { Calendaricon } from "../component/icon/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export default function Home() {
  const [dateRange, setDateRange] = React.useState({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });
  const [state, setState] = useState(false);

  return (
    <div className="bg-gray-200 min-h-screen gap-20 flex flex-col md:flex-row p-4">
      <div className="bg-white w-full md:w-[250px] flex flex-col items-center py-6 rounded-xl shadow-sm">
        <div className="mb-6">
          <LogoIcon />
        </div>
        <Link
          href="/admin/menu"
          className="flex items-center gap-2 border rounded-[20px] px-4 py-2 hover:bg-gray-200 transition"
        >
          <Menuicon />
          <span className="text-lg font-medium">Food Menu</span>
        </Link>

        <div className="flex justify-center items-center w-[130px] h-[35px] rounded-2xl bg-black mt-6">
          <Caricon />
          <span className="text-white text-base ml-2">Orders</span>
        </div>
      </div>
      <div className="flex-1 bg-white border rounded-xl shadow-sm p-6 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-start items-center md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Orders</h1>
            <p className="text-gray-500">Items</p>
          </div>
          <div className="flex flex-wrap-reverse gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className={`w-xs justify-start text-left`}
                  variant={`outline`}
                >
                  <Calendaricon />
                  {dateRange?.from ? (
                    dateRange?.to ? (
                      <>
                        {format(dateRange.from, "d MMMM yyyy")}
                        {format(dateRange.to, "d MMMM yyyy")}
                      </>
                    ) : (
                      format(dateRange.from, "d MMMM yyyy")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="center" className={`w-auto p-0`}>
                <Calendar
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
            <div>
              <button
                className="border rounded-lg h-10 hover:bg-gray-200 "
                onClick={() => setState(true)}
              >
                Change Delivery State
              </button>
              {state === true ? (
                <div className="absolute border w-100 h-60 bg-white rounded-3xl ">
                  <div className="flex justify-around mt-5  ">
                    <h1>Change Delivery State</h1>
                    <button
                      className="border  w-7 h-7 rounded-3xl flex justify-center items-center bg-gray-200"
                      onClick={() => setState(false)}
                    >
                      <h1>x</h1>
                    </button>
                  </div>
                  <div className=" flex justify-center mt-7 gap-5 ">
                    <button className="border rounded-xl bg-red-100 border-red-400 w-25 h-8  ">
                      <h1>Delivered</h1>
                    </button>
                    <button className="border rounded-xl bg-gray-100 w-25 h-8 ">
                      <h1>Pending</h1>
                    </button>
                    <button className="border rounded-xl bg-gray-100 w-25 h-8 ">
                      <h1>Cancelled</h1>
                    </button>
                  </div>
                  <div className="flex justify-center items-center mt-10 ">
                    <button className="w-80 h-10 border rounded-3xl bg-black ">
                      <h1 className="text-white">save</h1>
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full bg-gray-100 rounded-lg p-3 font-medium text-gray-700">
          <div className="w-10 flex justify-center items-center">
            <input
              type="checkbox"
              className="w-4 h-4 accent-black cursor-pointer"
            />
          </div>
          <h1 className="flex-1 text-center">Customer</h1>
          <h1 className="flex-1 text-center">Food</h1>
          <h1 className="flex-1 text-center">Date</h1>
          <h1 className="flex-1 text-center">Total</h1>
          <h1 className="flex-1 text-center">Delivery Address</h1>
          <h1 className="flex-1 text-center">Delivery State</h1>
        </div>
        <div className="flex w-full bg-gray-50 rounded-lg p-3 text-gray-800 hover:bg-gray-100 transition">
          <div className="w-10 flex justify-center items-center">
            <input
              type="checkbox"
              className="w-4 h-4 accent-black cursor-pointer"
            />
          </div>
          <div className="flex-1 text-center">Temuulen</div>
          <div className="flex-1 text-center">Budaatai Huurga</div>
          <div className="flex-1 text-center">2025-11-06</div>
          <div className="flex-1 text-center">$24.99</div>
          <div className="flex-1 text-center">123 Main St</div>
          <div className="flex-1 text-center border rounded-lg font-medium">
            Delivered
          </div>
        </div>
        <div className="flex w-full bg-gray-50 rounded-lg p-3 text-gray-800 hover:bg-gray-100 transition">
          <div className="w-10 flex justify-center items-center">
            <input
              type="checkbox"
              className="w-4 h-4 accent-black cursor-pointer"
            />
          </div>
          <div className="flex-1 text-center">vvle</div>
          <div className="flex-1 text-center">Tsuivan</div>
          <div className="flex-1 text-center">2025-11-05</div>
          <div className="flex-1 text-center">$18.50</div>
          <div className="flex-1 text-center">456 Elm Ave</div>
          <div className="flex-1 text-center border rounded-2xl font-medium">
            Pending
          </div>
        </div>
      </div>
    </div>
  );
}
