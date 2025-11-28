import { Logo2icon } from "./icon/logo2icon";

export const Footer = () => {
  return (
    <div className="w-full h-[500px] bg-black flex justify-around  ">
      <div className="p-10">
        <Logo2icon />
      </div>
      <div className="p-10 flex flex-col gap-5 ">
        <h1 className="text-white opacity-50 ">NOM NOM</h1>
        <h1 className="text-white">Home</h1>
        <h1 className="text-white">Contact Us</h1>
        <h1 className="text-white">Pizzas</h1>
        <h1 className="text-white">Main Dishes</h1>
        <h1 className="text-white">Desserts</h1>
      </div>
      <div className="p-10 flex flex-col gap-5">
        <h1 className="text-white opacity-50">Side Dish </h1>
        <h1 className="text-white"> Brunch</h1>
        <h1 className="text-white">Desserts</h1>
        <h1 className="text-white">Beverages</h1>
        <h1 className="text-white">Fish & Sea foods</h1>
      </div>
      <div className="p-10 flex flex-col gap-5 ">
        <h1 className="text-white opacity-50 ">Follow Us</h1>
      </div>
    </div>
  );
};
