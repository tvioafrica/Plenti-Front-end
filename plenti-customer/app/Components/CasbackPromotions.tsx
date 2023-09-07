import React, { useState, useEffect } from "react";
import { promotionlady } from "@/images/index";
import { offerCard as initialOfferCard } from "../constants/index";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import MorePoints from "./MorePoints";

interface Offer {
  id: number;
  img: { src: string };
  offer: string;
  endDate: string; // Should be in the format "YYYY-MM-DD"
  percentCashback: string;
  remainingDays: number; // Added for countdown
}

const CasbackPromotions: React.FC = () => {
  const [offerCard, setOfferCard] = useState<Offer[]>(initialOfferCard);

  useEffect(() => {
    const calculateRemainingDays = () => {
      const currentDate = new Date();

      const updatedOffers = initialOfferCard.map((offer) => {
        const endDate = new Date(offer.endDate);
        const timeDifference = endDate.getTime() - currentDate.getTime();
        const remainingDays = Math.max(
          Math.ceil(timeDifference / (1000 * 60 * 60 * 24)),
          0
        );
        return { ...offer, remainingDays };
      });

      setOfferCard(updatedOffers);
    };

    calculateRemainingDays();
  }, []);

  return (
    <>
      <div className="my-[1.5rem]">
        <h2 className="text-[20px]">More ways to earn cashback</h2>
        <p className="text-[#A09F9F]">
          Extra cash back for a selected few like you
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {offerCard.map((offers) => {
          return (
            <aside className=" rounded-md shadow-md p-[1rem]" key={offers.id}>
              <div className="relative">
                <img
                  src={offers.img.src}
                  alt=""
                  className="w-full h-[143px] object-cover rounded-md"
                />
                <figure className="bg-[#FFF5F5] absolute bottom-0 right-[5%] text-[#EA1C24] my-[1rem] rounded-md p-[0.2rem] px-[0.4rem] text-[10px] w-auto">
                  <TimerOutlinedIcon />{" "}
                  <span>Offer ends in {offers.remainingDays} days</span>
                </figure>
              </div>
              <div className="bg-[#FFF5F5] text-[#EA1C24] my-[1rem] rounded-md p-[0.5rem] text-[12px] w-auto">
                <TimerOutlinedIcon /> <span>{offers.percentCashback}</span>
              </div>
              <p className="text-[#818080] my-[1rem]">{offers.offer}</p>
              <p className="underline"> view details</p>
            </aside>
          );
        })}
      </div>
      <MorePoints />
    </>
  );
};

export default CasbackPromotions;
