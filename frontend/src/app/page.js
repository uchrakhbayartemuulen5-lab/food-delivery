"use client";

import { Card } from "./component/Card";
import { Footer } from "./component/footer";

import { MainPage } from "./component/main-page";
import { useEffect, useState } from "react";

export default function Home() {
  const [items, setitems] = useState([]);
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const getData = async () => {
    try {
      const res = await fetch(`${url}/category`);
      const data = await res.json();
      setitems(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }),
    [];

  return (
    <div>
      <MainPage />
      {items.map((item, index) => {
        return (
          <Card
            key={index}
            categoryId={item._id}
            categoryName={item.categoryName}
          />
        );
      })}
      <Footer />
    </div>
  );
}
