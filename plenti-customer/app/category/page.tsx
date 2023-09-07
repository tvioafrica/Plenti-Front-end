"use client";
import React from "react";
import Brands from "../Components/Brands";
import { category_brands, colors } from "../constants/index";
import { offerCard } from "../constants/index";
import OfferCard from "../Components/Offers";

const page = () => {
  return (
    <div>
      <h2 className="py-[1rem] text-2xl text-[#424040] capitalize font-bold">
        category
      </h2>
      <p className="text-[#818080] text-[18px] capitalize">
        find and explore categories that suits your needs{" "}
      </p>

      <section className="grid grid-cols-4 gap-4 py-[1rem]">
        {category_brands.map((category, index) => {
          return (
            <aside
              className="rounded-lg p-[1rem] flex items-center justify-center flex-col"
              key={category.id}
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <img src={category.img.src} alt="" />
              <p className="text-center p-[0.5rem]">{category.text}</p>
            </aside>
          );
        })}
      </section>
      <Brands />
      <div className="flex justify-between my-[1rem] px-[2rem]">
          <span className="text-[#A09F9F]">Explore top offers and discounts</span>
          <span className=" font-bold">See all</span>
        </div>
      <div className="grid grid-cols-2 gap-3 my-[2rem]">
        {offerCard.slice(0, 2).map((offer) => (
          <div className="w-[320px]" key={offer.id}>
            <OfferCard offer={offer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
