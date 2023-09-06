import React from "react";
import { pointOptions } from "../constants/index";


const MorePoints1 :() => React.JSX.Element = () => {
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

const MorePoints2 = () => {
  return <></>;
};

const MorePoints = () => {  
  return <>{MorePoints1()}</>;
};
export default MorePoints;
