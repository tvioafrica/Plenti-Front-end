"use client";
import Link from "next/link";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { malls } from "../../constants/index";

const page = () => {
  return (
    <>
      <div className="py-[2rem]">
        <h2 className="text-2xl capitalize mb-[1rem]">stores</h2>
        <p
          className="text-[#626060]"
        >
          Find and explore stores near you to find get exclusive discounts and
          offers.
        </p>
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
          <div className="grid grid-cols-2 gap-4 my-[2rem]">
            {malls.map((mall) => {
              return (
                <div className="w-[320px] mb-[2rem]">
                  <aside className="relative mb-[4rem]">
                    <img
                      src={mall.image.src}
                      className="w-full rounded-t-xl h-[154px] object-cover"
                      alt=""
                    />
                    <img
                      src={mall.mall.src}
                      className="h-[80px] bottom-[-25%] left-4 absolute w-[80px] rounded-full"
                      alt=""
                    />
                  </aside>
                  <aside>
                    <h2 className="capitalize">{mall.mallName}</h2>
                    <p className="text-[#818080] my-[0.6rem]">
                      {mall.descripton}
                    </p>
                    <Link href={`/stores/${mall.mallName}`}>
                      <p className="underline">view offer details</p>
                    </Link>
                  </aside>
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
    </>
  );
};

export default page;
