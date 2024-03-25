import React from "react";

function OneService({ Services, handleNavigate }) {
  return (
    <>
      <div
        onClick={() => handleNavigate(Services.tab)}
        className=" lg:w-2/12 rounded-2xl flex flex-col w-1/2 justify-center h-48 alignation p-4 border-2 border-gray-800 m-1 cursor-pointer soloh"
      >
        <span className="p-4 text-green-700 text-7xl hover:text-8xl">
          {Services.icon}
        </span>
        <p className="font-semibold text-sm text-white text-center ">
          {Services.title}
        </p>
      </div>
    </>
  );
}

export default OneService;
