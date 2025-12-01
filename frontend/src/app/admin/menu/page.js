"use client";

import Link from "next/link";
import { Caricon } from "@/app/component/icon/caricon";
import { Menuicon } from "@/app/component/icon/menuicon";
import { LogoIcon } from "@/app/component/icon/logoicon";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React, { useEffect, useState } from "react";
import { CategoryList } from "@/app/component/categorylist";
import { CategoryCard } from "../component/category-card";
import { PaginationMy } from "../component/pagination";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [category, setCategory] = useState(false);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const handleAddCategory = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${url}/category`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ categoryName: name }),
      });

      const raw = await res.text();

      let newCategory = null;

      try {
        newCategory = JSON.parse(raw);
        setItems((prev) => [...prev, newCategory]);
      } catch {
        console.log("Backend returned text instead of JSON:", raw);
        await getData();
      }

      setName("");
      setOpen(false);
      setCategory();
    } catch (err) {
      console.error(err);
    }
  };

  const getData = async () => {
    const res = await fetch(`${url}/category`);
    const data = await res.json();
    setItems(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col  md:flex-row bg-gray-200 min-h-screen">
      <div className="bg-white w-full md:w-[200px] flex flex-col items-center py-6 shadow-sm">
        <div className="mb-6">
          <LogoIcon />
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex items-center justify-center gap-2 border  rounded-[20px] w-[150px] py-2 hover:bg-gray-100 transition">
            <Menuicon />
            <h1 className="text-base font-medium">Food Menu</h1>
          </div>

          <Link href="/admin">
            <div className="flex justify-center items-center  gap-2 w-[120px] h-[35px] rounded-2xl bg-black hover:bg-gray-800 transition">
              <Caricon />
              <h1 className="text-white text-base font-medium">Orders</h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center p-6">
        <div className="w-full max-w-[1400px] bg-white border rounded-xl shadow-sm p-5">
          <h1 className="text-2xl font-semibold mb-4">Dishes Category</h1>
          <div className="flex">
            <div className="flex flex-wrap gap-3">
              {items.map((cat, i) => (
                <CategoryList
                  key={i}
                  name={cat.categoryName}
                  count={cat.food ?? cat.foodsCount}
                />
              ))}
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <form>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className={"w-10 h-10 rounded-full bg-red-500 text-white "}
                  >
                    +
                  </Button>
                </DialogTrigger>

                <DialogContent
                  className="sm:max-w-[425px]"
                  onClick={() => setCategory(false)}
                >
                  <DialogHeader>
                    <DialogTitle>Add new category</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name-1">Category name</Label>
                      <Input
                        id="name-1"
                        name="name"
                        placeholder="Type category name ....."
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleAddCategory}>
                      Add Category
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </div>
        {items.map((item, index) => {
          return (
            <CategoryCard
              key={index}
              categoryId={item._id}
              categoryName={item.categoryName}
            />
          );
        })}

        <PaginationMy />
      </div>
    </div>
  );
}
