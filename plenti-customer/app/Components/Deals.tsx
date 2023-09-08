" use client";
import React, { useState, useEffect } from "react";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { ImLocation2 } from "react-icons/im";
import Link from "next/link";

interface Offer {
  id: number;
  img: { src: string };
  offer: string;
  Availabity: string;
  endDate: string; // Should be in the format "YYYY-MM-DD"
  percentCashback: string;
}

interface OfferProps {
  offer: Offer;
  detailsLink: string ;
}

const Deals: React.FC<OfferProps> = ({ offer, detailsLink }) => {
  const [remainingDays, setRemainingDays] = useState<number>(0);

  useEffect(() => {
    const calculateRemainingDays = () => {
      const currentDate = new Date();
      const endDate = new Date(offer.endDate);
      const timeDifference = endDate.getTime() - currentDate.getTime();
      const days = Math.max(
        Math.ceil(timeDifference / (1000 * 60 * 60 * 24)),
        0
      );
      setRemainingDays(days);
    };

    calculateRemainingDays();
  }, [offer.endDate]);

  return (
    <aside className="rounded-md shadow-md p-[1rem]">
      <div className="relative">
        <img
          src={offer.img.src}
          alt=""
          className="w-full h-[153px] object-cover rounded-md"
        />
        <figure className="bg-[#FFF5F5] absolute bottom-0 right-[5%] text-[#EA1C24] my-[1rem] rounded-md p-[0.2rem] px-[0.4rem] text-[10px] w-auto">
          <TimerOutlinedIcon />
          <span>Offer ends in {remainingDays} days</span>
        </figure>
      </div>
      <span className="bg-[#FFF5F5] text-[#EA1C24] my-[1rem] inline-block rounded-md p-[0.5rem] text-[12px] w-auto">
        <TimerOutlinedIcon /> <span>{offer.percentCashback}</span>
      </span>
      <p className="text-[#818080] my-[1rem]">{offer.offer}</p>
      <p className="text-[#818080] my-[1rem]">
        <span className="flex items-center">
          {" "}
          <ImLocation2 /> {offer.Availabity}
        </span>
      </p>
      <Link href={detailsLink}>
        <p className="underline">
          {" "}
          view details
        </p>
      </Link>
    </aside>
  );
};

export default Deals;
