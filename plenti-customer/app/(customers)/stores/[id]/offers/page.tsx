"use client"
import React from "react";
import { stone_logo, stone_banner } from "@/images/index";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OfferDecription from "@/app/Components/OfferDecription";

const page = () => {
  return (
    <div>
      <aside className="m-[1.5rem]">
        <img
          src={stone_banner.src}
          className="w-full rounded-xl h-[280px] object-cover"
          alt=""
        />
        <div className="flex items-center gap-2 my-[1rem] ">
          <img
            src={stone_logo.src}
            alt=""
            className="w-[80px] h-[80px] object-cover rounded-full"
          />
          <p>
            <span className="text-[#626060] block text-xl">
              Coldstone creamery ice creams
            </span>
            <span className="text-[#818080]">@coldstonecreamy_ngf</span>
          </p>
        </div>
      </aside>

      <Tabs>
        <TabList>
          <Tab>Offer Description</Tab>
          <Tab>Store Locations</Tab>
          <Tab>Terms and Conditions</Tab>
        </TabList>

        <TabPanel>
          <OfferDecription />
         <div className="flex items-center flex-col gap-4 my-[2rem]">
         <button className="bg-[#EA1C24] text-[#FFEAEB] rounded-[24px] h-[48px] block w-2/5 px-[3rem] py-[0.5rem]">
            claim this deal
          </button>
          <button className="text-[#EA1C24] bg-[#FFEAEB] rounded-[24px] h-[48px] block w-2/5 px-[3rem] py-[0.5rem]">
           share to earn points 
          </button>
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
