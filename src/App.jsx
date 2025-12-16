import { useState } from "react";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";
import News from "./Pages/News";
import Category from "./Components/Category";
import { useNewsContext } from "./Context/NewsContext";
import Loader from "./Components/Loader";

function App() {
  const [count, setCount] = useState(0);
  const { loading } = useNewsContext();
  return (
    <>
      <div className="bg-neutral-200">
        <Navbar className="sticky top-0 z-10" />
        <Category className="sticky w-full top-16 z-20" />
        {/* {loading ? <Loader /> : <News />} dont do this */}
        <News />
      </div>
    </>
  );
}

export default App;
