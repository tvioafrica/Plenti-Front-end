"use client"
import React from "react";
import { stone_logo, stone_banner } from "@/images/index";
import Tabs from "@/app/Components/Tabs";
import OfferDecription from "@/app/Components/OfferDecription";

const page = () => {
  return (
    <div>
      <aside className="md:m-[1.5rem]">
        <img
          src={stone_banner.src}
          className="w-full rounded-xl md:h-[280px] h-[210px] object-cover"
          alt=""
        />
        <div className="flex items-center gap-2 my-[1rem] ">
          <img
            src={stone_logo.src}
            alt=""
            className="w-[80px] h-[80px] object-cover rounded-full"
          />
          <p>
            <span className="text-[#626060] block  md:text-xl">
              Coldstone creamery ice creams
            </span>
            <span className="text-[#818080]">@coldstonecreamy_ngf</span>
          </p>
        </div>
      </aside>

      <Tabs
          tabData={[
            { label: "Offer Description" },
            { label: "Store Locations" },
            { label: "Terms and Conditions " },
          ]}
        >
          <div>
            {" "}
            <OfferDecription />
         <div className="flex items-center flex-col gap-4 my-[2rem]">
         <button className="bg-[#EA1C24] text-[#FFEAEB] rounded-[24px] h-[48px] block md:w-2/5 w-4/5 px-[3rem] py-[0.5rem]">
            claim this deal
          </button>
          <button className="text-[#EA1C24] bg-[#FFEAEB] rounded-[24px] h-[48px] block md:w-2/5 w-4/5 px-[3rem] py-[0.5rem]">
           share to earn points 
          </button>
         </div>
          </div>
          <div>for you</div>
          <div>
            info 3
          </div>
        </Tabs>

   
    </div>
  );
};

export default page;
