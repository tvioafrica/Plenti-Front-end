"use client"
import React from "react";
import { mall, mallimage } from "@/images/index";
import Deals from "@/app/Components/Deals";
import { dealCard } from "@/app/constants/index";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="w-[420px] m-[2rem]">
        <aside className="relative mb-[4rem]">
          <img
            src={mallimage.src}
            className="w-full rounded-xl h-[174px] object-cover"
            alt=""
          />
          <img
            src={mall.src}
            className="h-[80px] bottom-[-25%] left-4 absolute w-[80px] rounded-full"
            alt=""
          />
        </aside>
      </div>

      <div className="flex overflow-x-auto white-space-nowrap gap-8 my-[2rem]">
        {dealCard.map((deal) => {
          return (
            <div className="w-[340px] flex-shrink-0">
              <Deals offer={deal} key={deal.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
