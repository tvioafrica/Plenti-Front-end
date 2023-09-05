"use client"
import Link from "next/link";
import React from "react";
import { navLinks } from "../constants";
import { logo } from "@/images/index";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentRoute = usePathname();

  return (
    <div className="bg-white fixed top-0 left-0 w-[280px] h-full">
      <div>
        <img src={logo.src} alt="" className="p-[2rem]" />
      </div>
      <ul>
        {navLinks.map((nav) => {
          return (
            <Link href={nav.link} key={nav.name}>
              <li
                className={
                  currentRoute === nav.link
                    ? "border-l-4 border-l-[black] rounded-md text-black flex gap-4 p-6 text-[#818080]"
                    : "text-black flex gap-4 p-6 text-[#818080]"
                }
              >
                {" "}
                <img src={nav.icons.src} alt="" /> <span>{nav.name}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
