"use client";
import Brands from "@/app/Components/Brands";
import Deals from "@/app/Components/Deals";
import React from "react";
import { dealCard } from "@/app/constants/index";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Promotions from "@/app/Components/Promotions";


const page = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl p-[2rem]">Restaurants and Bars</h2>
      <Brands />
      <div className="md:hidden">
        <Promotions />
      </div>
      <Tabs>
        <TabList>
          <Tab>All Categories</Tab>
          <Tab>Fashion</Tab>
          <Tab>Health and Beauty</Tab>
          <Tab>Restaurant & bars</Tab>
          <Tab>Electronics</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-2 gap-4 my-[2rem]">
            {dealCard.map((deal) => {
              return (
                <div className="w-[320px]" key={deal.id}>
                  <Deals offer={deal} detailsLink={"rom"} />
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default page;
