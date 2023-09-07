"use client";
import Brands from "@/app/Components/Brands";
import Deals from "@/app/Components/Deals";
import React from "react";
import { dealCard } from "@/app/constants/index";

const page = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl p-[2rem]">Restaurants and Bars</h2>
      <Brands />
      <div className="grid grid-cols-2 gap-4">
        {dealCard.map((deal) => {
          return (
            <div className="w-[320px]">
              <Deals offer={deal} key={deal.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
