import React from "react";

const ShimmerComp = () => {
  return (
    <div>
      <div className="p-2 m-3 w-[200px] h-[200px] rounded-lg bg-gray-200 animate-pulse"></div>
      <div className="pl-5 mt-4 w-[200px] space-y-2">
        <h3 className="h-4 bg-gray-200 rounded-md w-3/4 animate-pulse"></h3>
        <h3 className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse"></h3>
        <h3 className="h-4 bg-gray-200 rounded-md w-2/3 animate-pulse"></h3>
        <h3 className="h-4 bg-gray-200 rounded-md w-4/5 animate-pulse"></h3>
      </div>
    </div>
  );
};

export default ShimmerComp;
