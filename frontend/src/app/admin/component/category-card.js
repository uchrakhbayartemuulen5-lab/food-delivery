import { Galleryicon } from "@/app/component/icon/galleryicon";
import { Penicon } from "@/app/component/icon/penicon";
import { Plusicon } from "@/app/component/icon/plusicon";
import { useEffect, useState } from "react";

export const CategoryCard = ({ categoryId, categoryName }) => {
  const [open, setOpen] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const fetchDishes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/food/${categoryId}`);
      const data = await response.json();

      console.log(data, "dsfdsfds");

      setDishes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <div className="w-full max-w-[1400px] bg-white border rounded-xl shadow-sm p-5 mt-6">
      <h1 className="text-3xl font-semibold mb-4">
        {categoryName} <span className="text-black">({dishes.length})</span>
      </h1>

      <div className="flex flex-wrap gap-6">
        <div className="border-2 border-dashed border-red-600 w-[300px] h-[300px] rounded-2xl flex flex-col items-center justify-center hover:bg-gray-50 transition">
          <button
            className="flex justify-center items-center"
            onClick={() => setOpen(true)}
          >
            <Plusicon />
          </button>
          {open && (
            <div className="absolute border w-[460px] h-[592px] bg-white rounded-3xl">
              <div className="flex justify-around mt-5 ">
                <h1>Add New to Dish to Appetizers</h1>
                <button
                  className="border  w-7 h-7 rounded-3xl flex justify-center items-center bg-gray-200 "
                  onClick={() => setOpen(false)}
                >
                  <h1>x</h1>
                </button>
              </div>
              <div className=" flex gap-5 mt-10 ml-3 ">
                <div>
                  <h1>Food Name</h1>
                  <input
                    className="w-[194px] h-[38px]  border rounded-lg "
                    placeholder="Type Food Name "
                  ></input>
                </div>
                <div>
                  <h1>Food price</h1>
                  <input
                    className="w-[194px] h-[38px] border rounded-lg"
                    placeholder="Enter price ... "
                  ></input>
                </div>
              </div>
              <div className="mt-5 ml-3 ">
                <h1>ingredients</h1>
                <input
                  className="w-[412px] h-[90px] border rounded-lg "
                  placeholder="Type Food Name "
                ></input>
              </div>
              <div className="flex flex-col justify-start items-start ml-3 mt-10 ">
                <h1>Food image</h1>
                <div className=" flex flex-col justify-center items-center ">
                  <button className=" border w-[412px] h-[138px] flex justify-center items-center bg-gray-100  ">
                    <Galleryicon />
                    <h1>Choose a file or drag & drop it here</h1>
                  </button>
                </div>
              </div>
              <div className="flex justify-end items-end h-20 mr-10 ">
                <button className=" w-20 h-7 rounded-lg bg-black ">
                  <h1 className="text-white">Add Dish</h1>
                </button>
              </div>
            </div>
          )}
        </div>
        {loading ? (
          <p>loading</p>
        ) : (
          dishes.map((dish, index) => (
            <div
              key={index}
              className="border w-[300px] h-[300px] rounded-2xl p-3 hover:shadow-md transition"
            >
              <div className="flex justify-center items-center">
                <img src={dish.image} />
                <button className="w-[270px] h-[170px] border rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
                  <Penicon />
                </button>
              </div>

              <div className="flex justify-between items-center mt-3">
                <h1 className="text-red-500 ">{dish.foodname}</h1>
                <h1 className="font-semibold">{dish.price}₮</h1>
              </div>

              <p className="text-sm text-gray-600 mt-2">{dish.ingredients}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
