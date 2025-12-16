import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../Context/NewsContext";

const Navbar = ({ className }) => {
  const { isSidebarOpen, setIsSideBarOpen, fetchNews, setNews } =
    useNewsContext();
  let setTimer = null;

  const searhcFunc = async (e) => {
    const searchVal = e.target.value;
    if (!searchVal) return;

    clearTimeout(setTimer);
    setTimer = setTimeout(async () => {
      const response = await fetchNews(`/everything?q=${searchVal}`);
      console.log("called");
      //   console.log(response?.articles);
      setNews(response?.articles);
    }, 2000);
  };
  return (
    <div className={`${className} w-full shadow-sm bg-white`}>
      <Wrapper className={"px-0"}>
        <div className="navbar text-black  ">
          <div className="flex-1">
            <a className="btn btn-ghost text-[13px] sm:text-base  md:text-xl font-bold">
              Techie News
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <input
              onChange={searhcFunc}
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-60 outline-none bg-white border-gray-400 "
            />
            <button className="btn btn-ghost btn-circle hover:bg-black hover:text-white">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />{" "}
                </svg>
                <span className="badge badge-xs badge-primary indicator-item bg-black border-black scale-70"></span>
              </div>
            </button>
            <button
              onClick={() => {
                setIsSideBarOpen((prev) => !prev);
              }}
              className="md:hidden shadow-xl h-7 w-7 flex items-center justify-center rounded-full    border-white  bg-black text-white"
            >
              C
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
