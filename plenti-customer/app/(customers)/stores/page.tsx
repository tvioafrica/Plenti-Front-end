"use client";
import Searchbar from "@/app/Components/Searchbar";
import Link from "next/link";
import React from "react";
import Tabs from "@/app/Components/Tabs";
import "react-tabs/style/react-tabs.css";
import { malls } from "../../constants/index";

const page = () => {
  return (
    <>
      <div className="py-[2rem]">
        <h2 className="text-2xl capitalize mb-[1rem]">stores</h2>
        <Searchbar />
        <p
          className="text-[#626060]"
        >
          Find and explore stores near you to find get exclusive discounts and
          offers.
        </p>
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
            {malls.map((mall) => {
              return (
                <div className="md:w-[320px] mb-[2rem] md:block flex justify-between gap-4 md:p-0 p-[1rem] h-auto h-[104px]">
                  <aside className="relative mb-[4rem] md:w-auto w-[50%]">
                    <img
                      src={mall.image.src}
                      className="w-full rounded-t-xl h-[154px] object-cover md:block hidden"
                      alt=""
                    />
                    <img
                      src={mall.mall.src}
                      className="md:h-[80px] bottom-[-25%] w-[110px] h-[110px] left-4 md:absolute md:w-[80px] md:rounded-full rounded-md"
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

    </>
  );
};

export default page;
