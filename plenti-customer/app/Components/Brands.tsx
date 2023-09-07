import React from "react";
import { brands } from "../constants/index";

const Brands = () => {
  return (
    <section>
      <div className="flex justify-between my-[1rem] px-[2rem]">
        <span className="text-[#A09F9F]">More ways to earn points</span>
        <span className=" font-bold">See all</span>
      </div>
      <aside className="flex justify-center p-[1rem] my-[0.5rem]">
        {brands.map((brand, index) => {
          return (
            <div
              className="h-[140px] w-[220px] flex items-center justify-center flex-col text-[#626060] text-center   rounded-lg rounded-lg gap-4"
              key={index}
            >
              <img
                src={brand.img.src}
                alt=""
                className="rounded-full  w-[80px] h-[80px] "
              />
              <p className="text-[14px] capitalize "> {brand.name}</p>
            </div>
          );
        })}
      </aside>
    </section>
  );
};

export default Brands;
