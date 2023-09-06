import React from "react";
import CasbackPromotions from "./CasbackPromotions";

const Cashback = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <aside className="bg-[#FFF4F4] rounded-lg p-[3rem] flex items-center justify-center flex-col">
          <h2 className="text-[#818080] text-xl mb-[1rem]">Total Cashback</h2>
          <h1 className="text-2xl">&#8358; 5,000</h1>
        </aside>
        <aside className="bg-[#FFF4F4] rounded-lg p-[3rem] flex items-center justify-center flex-col">
          <h2 className="text-[#818080] text-xl mb-[1rem]">Total Points </h2>
          <h1 className="text-2xl">&#8358; 5,000</h1>
        </aside>
      </div>
      <CasbackPromotions />
    </>
  );
};

export default Cashback;
