"use client";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { deal } from "@/images/index";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
}

const page = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Coldstone creamery ice creams
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Promotion description
    </Link>,
    <Typography key="3" color="text.primary">
      Claim deal
    </Typography>,
  ];

  return (
    <div>
      <Breadcrumbs
        separator=">"
        aria-label="breadcrumb"
        sx={{ margin: "1rem 0" }}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <div>
        <img src={deal.src} alt="" />

        <aside>
          <span className="bg-[#FFF5F5] text-[#EA1C24] my-[1rem] inline-block rounded-md p-[0.5rem] text-[12px] w-auto">
            <TimerOutlinedIcon /> <span>Earn #3000 cashback</span>
          </span>

          <p>
            Buy 2 cups of ice cream for ₦3000 and earn up a cashback of ₦1000
          </p>
          <p>#3000</p>
        </aside>
      </div>
    </div>
  );
};

export default page;
