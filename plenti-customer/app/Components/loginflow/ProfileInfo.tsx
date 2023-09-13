import { loginimg } from "@/images/index";
import React from "react";

const ProfileInfo = () => {
  return (
    <div className="flex justify-between my-[5rem]">
      <form action="" className="ml-[4rem]">
        <h2 className="text-2xl"> Profile information </h2>
        <p className="text-gray-600 my-[1rem]">
          To continue, add your profile details. This information would help us
          to provide offers that are unique to you
        </p>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="my-[1.5rem]">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            full name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete=""
              placeholder="e.g Romeoscript chukwuemeka"
              required
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="my-[1rem]">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-400"
            >
              Residential Address
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="your home address"
              autoComplete="current-password"
              required
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
         
        </div>

        <div className="mt-[3rem]">
          <button
            type="submit"
            className="flex w-3/5 justify-center bg-red-600 rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Next
          </button>
        </div>
      </form>
      <img src={loginimg.src} alt="" />
    </div>
  );
};

export default ProfileInfo;
