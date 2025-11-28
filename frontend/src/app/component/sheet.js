import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Shoppingicon } from "./icon/shoppingicon";
import { useCart } from "@/context/cart-context";

export const Sags = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.total, 0);
  const handleCheckout = () => {
    if (!user) {
      window.location.href = "/amdin/login";
      return;
    }
    finalizeOrder();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Shoppingicon />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[480px] bg-[#3B3B3B] text-white pt-6 space-y-6"
      >
        <SheetHeader>
          <SheetTitle className="text-2xl text-white font-semibold">
            Order detail
          </SheetTitle>
        </SheetHeader>

        <div className="bg-white text-black rounded-2xl p-4 space-y-6">
          <div className="flex">
            <button className="flex">
              <h1 className="w-40 text-black  h-8 rounded-xl  flex justify-center items-center hover:bg-red-400">
                Cart
              </h1>
              <h1 className="w-40 text-black  h-8 rounded-xl  flex justify-center items-center hover:bg-red-400">
                Order
              </h1>
            </button>
          </div>
          <p className="text-xl font-semibold">My cart</p>

          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-10">No items in cart</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="w-full flex gap-4 border-b pb-4">
                <img
                  src={item.image}
                  className="w-24 h-24 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <p className="text-red-500 font-semibold text-lg">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(index, Math.max(1, item.quantity - 1))
                      }
                      className="text-2xl font-bold"
                    >
                      −
                    </button>
                    <p className="text-lg">{item.quantity}</p>
                    <button
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      className="text-xl font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 text-xl"
                  >
                    ✕
                  </button>
                  <p className="font-semibold text-lg">{item.total}₮</p>
                </div>
              </div>
            ))
          )}

          <div className="pt-4 border-t space-y-3">
            <div className="flex justify-between text-lg font-semibold">
              <p>Total</p>
              <p>{totalPrice}₮</p>
            </div>

            <Button
              className="w-full bg-red-500 text-white rounded-full py-6 text-lg"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        </div>

        <SheetClose />
      </SheetContent>
    </Sheet>
  );
};
