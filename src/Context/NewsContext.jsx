import { createContext, useContext, useEffect, useState } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextComp = ({ children }) => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);
  //
  //
  //
  //sideBar State
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const api_key = import.meta.env.VITE_API_KEY;

  const fetchNews = async (url = "/everything?q=software") => {
    setLoading(true);
    try {
      const result = await api.get(`${url}&apiKey=${api_key}`);
      setLoading(false);
      return result.data;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const value = {
    isSidebarOpen,
    setIsSideBarOpen,
    api_key,
    news,
    setNews,
    fetchNews,
    loading,
    setLoading,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextComp, useNewsContext };
