import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/cart-context";

export const Dialogs = ({ price, foodname, image }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = price * quantity;

  const handleAdd = () => {
    addToCart({
      name: foodname,
      price,
      quantity,
      total: totalPrice,
      image,
    });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-gray-400 rounded-2xl">
          <PlusIcon />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{foodname}</DialogTitle>
        </DialogHeader>

        <div className="flex">
          <div className="w-[277px] h-[264px] p-2">
            <img
              src={image}
              className="rounded-2xl border border-black object-cover"
            />
          </div>

          <div className="w-1/2 p-10 space-y-6">
            <p className="text-gray-600 mt-2 text-lg">{foodname}</p>

            <div>
              <p className="text-lg text-gray-500">Total price</p>
              <p className="text-3xl font-bold">{totalPrice}₮</p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={decrease}
                className="w-12 h-12 rounded-full border text-2xl flex items-center justify-center"
              >
                –
              </button>

              <p className="text-xl font-medium">{quantity}</p>

              <button
                onClick={increase}
                className="w-12 h-12 rounded-full border text-2xl flex items-center justify-center"
              >
                +
              </button>
            </div>

            <Button
              onClick={handleAdd}
              className="w-full mt-10 bg-black rounded-full h-14 text-lg"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
