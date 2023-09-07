import React from "react";
import { pointOptions, cate } from "../constants/index";

const MorePoints1: () => React.JSX.Element = () => {
  return (
    <div>
      <div className="flex justify-between my-[1rem] px-[2rem]">
        <span className="text-[#424040]">More ways to earn points</span>
        <span className=" font-bold">See all</span>
      </div>
      <aside className="grid gap-4 place-items-center grid-cols-4 p-[1rem] my-[0.5rem]">
        {pointOptions.map((points, index) => {
          const { img, text, background, color } = points;
          const divStyle = {
            backgroundColor: background,
            color: color,
          };

          return (
            <div
              className="h-[140px] w-[140px]  flex items-center justify-center flex-col  rounded-lg"
              style={divStyle}
              key={index}
            >
              <img src={img.src} alt="" />
              {text}
            </div>
          );
        })}
      </aside>
    </div>
  );
};

const MorePoints2: () => React.JSX.Element = () => {
  return (
    <>
      <div>
        <div className="flex justify-between my-[1rem] px-[2rem]">
          <span className="text-[#A09F9F]">Explore top categories</span>
          <span className=" font-bold">See all</span>
        </div>
        <aside className="grid gap-4 place-items-center grid-cols-3 p-[1rem] my-[0.5rem]">
          {cate.map((points, index) => {
            return (
              <div
                className="h-[140px] w-[220px]  flex items-center justify-center  rounded-lg rounded-lg gap-4"
                key={index}
              >
                <p className="text-[14px]"> {points.text}</p>
                <img
                  src={points.img.src}
                  alt=""
                  className="rounded-tr-[40px] rounded-br-[40px] w-[50%] h-full "
                />
              </div>
            );
          })}
        </aside>
      </div>
    </>
  );
};

const MorePoints = () => {
  return (
    <>
      {MorePoints1()}
      {MorePoints2()}
    </>
  );
};
export default MorePoints;
