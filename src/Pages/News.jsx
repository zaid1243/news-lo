import React, { useEffect } from "react";
import Wrapper from "../Components/Wrapper";
import NewsCard from "../Components/NewsCard";
import axios from "axios";
import api from "../config/axios";
import { useNewsContext } from "../Context/NewsContext";
import Loader from "../Components/Loader";

const News = () => {
  const { loading, news, setNews, api_key, fetchNews } = useNewsContext();

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      //   console.log(data.articles);
      setNews(data.articles);
      //   console.log(data.articles);
    })();
  }, []);
  if (loading) return <Loader />;

  return (
    <Wrapper>
      <div className="text-black min-h-screen w-full  place-items-center grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-0 -my-8 md:-my-5 -py-5">
        {news.map((newsDetails, idx) => (
          <NewsCard key={idx} details={newsDetails} />
        ))}
      </div>
    </Wrapper>
  );
};

export default News;
