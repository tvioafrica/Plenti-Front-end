"use client";
import Brands from "@/app/Components/Brands";
import Deals from "@/app/Components/Deals";
import React from "react";
import { dealCard } from "@/app/constants/index";
import "react-tabs/style/react-tabs.css";
import Promotions from "@/app/Components/Promotions";
import Tabs from "@/app/Components/Tabs";

const page = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl p-[2rem]">Restaurants and Bars</h2>
      <Brands />
      <div className="md:hidden">
        <Promotions />
      </div>
      <Tabs
        tabData={[
          { label: "All Categories" },
          { label: "Fashion" },
          { label: "Health and Beauty" },
          { label: "Restaurant & bars" },
          { label: "Electronics" },
        ]}
      >
        <div>
          {" "}
          <div className="grid md:grid-cols-2 gap-4 my-[2rem]">
            {dealCard.map((deal) => {
              return (
                <div className="w-[320px]" key={deal.id}>
                  <Deals offer={deal} detailsLink={"rom"} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2>Any content 2</h2>
        </div>
        <div>
          <h2>Any content 2</h2>
        </div>
        <div>
          <h2>Any content 2</h2>
        </div>
        <div>
          <h2>Any content 2</h2>
        </div>
        <div>
          <h2>Any content 2</h2>
        </div>
      </Tabs>
      
    </div>
  );
};

export default page;
