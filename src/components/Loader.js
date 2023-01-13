import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = ({ color, message }) => {
  return (
    <div className="fixed w-full h-screen bg-black/80 top-0 left-0 flex items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <Triangle
          height="80"
          width="80"
          radius="9"
          color={color}
          ariaLabel="three-dots-loading"
        />
        <div className="text-white">{message}</div>
      </div>
    </div>
  );
};

export default Loader;
