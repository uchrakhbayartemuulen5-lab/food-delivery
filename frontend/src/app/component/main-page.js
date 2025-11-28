import { Logo2icon } from "./icon/logo2icon";
import { Mapicon } from "./icon/mapicon";
import { useEffect, useState } from "react";
import { Humanicon } from "./icon/humanicon";

import { Tab } from "./tab";
import { Sags } from "./sheet";
import Link from "next/link";

export const MainPage = () => {
  const [state, setState] = useState(false);
  const fetchDishes = async () => {
    try {
      const response = await fetch(`http://localhost:8000/food/${categoryId}`);

      const data = await response.json();

      console.log(data, "dsfdsfds");

      setDishes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <div>
      <div className="bg-black w-full h-[172px] ">
        <div className="flex justify-between items-center ">
          <div className=" mt-25 ml-20 ">
            <Logo2icon />
          </div>
          <div className="flex justify-center items-center gap-5 ">
            <button className="w-[251px] h-9 border bg-white rounded-lg flex justify-center items-center  ">
              <Mapicon />
              <h1 className="text-red-300">Delivery Address:</h1>
              <h1>Add Location </h1>
            </button>

            <Sags>
              <Tab />
            </Sags>

            <button className=" gap-3" onClick={() => setState(true)}>
              <Humanicon />
            </button>
            {state === true ? (
              <div className="w-[188px] h-[104px] border absolute flex justify-center items-center flex-col bg-white rounded-lg mt-60 ml-40 ">
                <p className="text-2xl">text@gamil.com</p>
                <Link href={"./admin/login"}>
                  <button className="w-20 h-9 bg-gray-50 border rounded-lg ">
                    Sign out
                  </button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div>
        <img src="BG.png" />
      </div>
    </div>
  );
};
