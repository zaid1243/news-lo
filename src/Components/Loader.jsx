import React from "react";

const Loader = () => {
  return (
    <div className="h-[80vh] w-full grid place-items-center">
      <div className="w-20 h-20 border-4 border-t-black border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
