import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../Context/NewsContext";
import api from "../config/axios";

const Category = ({ className }) => {
  const { isSidebarOpen, setIsSideBarOpen, setNews, fetchNews } =
    useNewsContext();
  const handleClick = async (cat) => {
    const response = await fetchNews(`/everything?q=${cat}`);
    // console.log(response?.articles);
    setNews(response?.articles);
  };
  return (
    <div className={`${className}`}>
      <div className={`relative w-full md:min-h-15 `}>
        <div
          className="py-1
      bg-gradient-to-r
      from-black via-gray-800 to-black
      bg-[length:300%_100%]
      animate-[shimmer_3s_linear_infinite]
      opacity-90 flex flex-wrap items-center 
      
    "
        >
          <Wrapper className={"w-full justify-center"}>
            <div className="hidden md:flex  flex-col md:flex-row  flex-wrap  md:items-center justify-center gap-2 md:gap-4 px-4">
              {[
                "All",
                "Artificial Intelligence",
                "Web Development",
                "Mobile Technology",
                "Cloud Computing",
                "Cybersecurity",
                "Software Development",
                "Startups & Tech Business",
                "IT Jobs & Hiring",
                "Data Science & Big Data",
                "DevOps & Infrastructure",
              ].map((item, i) => (
                <button
                  onClick={() => handleClick(item)}
                  key={i}
                  className="
          rounded-md
          border
          bg-white
          text-black
          hover:bg-gray-200
          btn
          duration-50
         active:scale-95 transition-all  btn-xs md:btn-sm"
                >
                  {item}
                </button>
              ))}
            </div>
            {isSidebarOpen && (
              <div className="transition-all absolute left-0 -top-16 right-0 bg-black  flex md:hidden text-white flex-col md:flex-row  flex-wrap  md:items-center gap-2 md:gap-4 px-4 w-full py-2 min-h-screen">
                <span
                  onClick={() => setIsSideBarOpen(false)}
                  className="absolute right-5 text-2xl font-semibold bg-gray-900 px-2"
                >
                  X
                </span>
                {[
                  "All",
                  "Artificial Intelligence",
                  "Web Development",
                  "Mobile Technology",
                  "Cloud Computing",
                  "Cybersecurity",
                  "Software Development",
                  "Startups & Tech Business",
                  "IT Jobs & Hiring",
                  "Data Science & Big Data",
                  "DevOps & Infrastructure",
                ].map((item, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      setIsSideBarOpen(false);
                      handleClick(item);
                    }}
                    className="
          py-2
          border-b
          bg-none
          text-white
          hover:bg-gray-200
          w-full 
          duration-50 
         active:scale-95 transition-all  btn-xs md:btn-sm"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </Wrapper>
        </div>

        <style>
          {`
      @keyframes shimmer {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
    `}
        </style>
      </div>
    </div>
  );
};
{
  /* <span className="h-8 w-8 flex items-center justify-center rounded-full shadow-md  top-1 right-0 absolute bg-black text-white">
        C
      </span> */
}
export default Category;
