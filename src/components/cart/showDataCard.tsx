"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // فرض اینکه فایل store.ts یا معادلش موجود است
import ItemCard from "./itemCard";

interface Product {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  disPrice: number;
  image: string;
  // سایر فیلدهای مربوط به محصول
}

const ShowDataCard = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.orebiReducer.products
  ); 

  return (
    <div>
      {products.length > 0 ? (
        <>
          {products.map((item: Product, index: number) => (
            <ItemCard item={item} key={index} />
          ))}
        </>
      ) : (
        <div className="rounded-md border border-gray-300 p-5">
          <h3 className="border-b border-gray-300 w-full text-primary">
            سبد خرید
          </h3>
          <p className="text-sm m-3">0 کالا در سبد خرید شما</p>
          <div className="mx-auto my-5 p-5 w-40">
            <Image
              src={"/assets/images/card/EmptyCart.png"}
              alt="سبد خرید خالی"
              width={150}
              height={150}
            />
            <p className="text-center">سبد خرید شما خالی است</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDataCard;
