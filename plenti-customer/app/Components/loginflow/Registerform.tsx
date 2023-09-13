import { appleicon, loginimg } from "@/images/index";
import React from "react";
import { googleicon } from "@/images/index";

const Registerform = () => {
  return (
    <div className="flex justify-between my-[5rem]">
      <form action="" className="ml-[4rem]">
        <h2 className="text-2xl">Create your Plenti accont</h2>
        <p className="text-gray-600 my-[1rem]">
          Earn cashback and points when you shop at your favorite store.
        </p>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            Phone Number
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="tel"
              type="tel"
              autoComplete="tel"
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
              Referal code (optional)
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex items-center justify-between my-[1.5rem]">
            <div className="text-sm">
              already have an account?
              <a
                href="#"
                className="font-semibold text-red-600  underline hover:text-red-500"
              >
                login
              </a>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center bg-red-600 rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create an account
          </button>
        </div>

        <button className="bg-white border-[1px] w-[90%] m-auto my-[1rem] block border-gray-600 text-grey-600 hover:bg-gray-700 hover:text-white text-left py-2 px-4 rounded flex items-center justify-center w-64">
          <img
            src={googleicon.src}
            alt="Apple icon"
            className="h-5 w-5 mr-4"
          />
          Sign in with Google
        </button>

        <button className="bg-white border-[1px] w-[90%] m-auto my-[1rem] block border-gray-600 text-grey-600 hover:bg-gray-700 hover:text-white text-left py-2 px-4 rounded flex items-center justify-center w-64">
          <img
            src={appleicon.src}
            alt="Apple icon"
            className="h-5 w-5 mr-4"
          />
          Sign in with Apple
        </button>
      </form>
      <img src={loginimg.src} alt="" />
    </div>
  );
};

export default Registerform;
