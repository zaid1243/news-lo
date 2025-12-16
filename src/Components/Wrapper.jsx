import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={`max-w-[70rem] md:m-auto  ${className}`}>{children}</div>
  );
};

export default Wrapper;
