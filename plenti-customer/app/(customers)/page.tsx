"use client";
import * as React from "react";
import { AiOutlineStar } from "react-icons/ai";
import Cashback from "../Components/Cashback";
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Balance from "../Components/Balance";
import Searchbar from "../Components/Searchbar";
import Tabs from "../Components/Tabs";

export default function Home() {
  return (
    <>
      <h2 className="md:m-[1.5rem] m-[1rem] text-[#818080]">
        Good Day ,<span className="font-bold text-black"> Romeoscript</span>
        <Searchbar />
      </h2>

      <div className="p-4">
        <Tabs
          tabData={[
            { label: "Cash Back" },
            { label: "For you", icon: <AiOutlineStar /> },
            { label: "Plenti Credit" },
          ]}
        >
          <div>
            {" "}
            <Cashback />
          </div>
          <div></div>
          <div>
            <Balance />
          </div>
        </Tabs>
      </div>
    </>
  );
}
