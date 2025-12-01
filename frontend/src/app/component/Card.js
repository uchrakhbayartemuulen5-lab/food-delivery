import { useEffect, useState } from "react";

import { Dialogs } from "./dialog";

export const Card = ({ categoryId, categoryName }) => {
  const [dishes, setDishes] = useState([]);
  const [state, setState] = useState(false);
  const [loading, setloading] = useState(false);
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchDisesh = async () => {
    try {
      const response = await fetch(`${url}/food/${categoryId}`);
      const data = await response.json();

      console.log(data, "jhgdsf");
      setDishes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchDisesh();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-700 py-10  ">
      <h1 className="text-3xl font-bold text-white ml-20 mb-8">
        {categoryName}
      </h1>

      <div className="flex flex-wrap gap-10 px-20">
        {loading ? (
          <p className="text-xl text-gray-700">Loading...</p>
        ) : (
          dishes.map((dish, index) => (
            <div
              key={index}
              className="w-[350px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all  p-4"
            >
              <div
                className="w-full h-[220px] bg-gray-200 rounded-lg flex justify-center items-center hover:bg-gray-300 transition"
                onClick={() => setState(true)}
              >
                <Dialogs price={dish.price} foodname={dish.foodname} />
              </div>

              <div className="flex justify-between items-center mt-4">
                <h1 className="text-red-500 text-xl font-semibold">
                  {dish.foodname}
                </h1>
                <p className="text-lg font-semibold">{dish.price}₮</p>
              </div>

              <p className="text-gray-600 text-sm mt-2 leading-5">
                {dish.ingredients}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
