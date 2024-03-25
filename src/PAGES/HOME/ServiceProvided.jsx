import React from "react";
import OneService from "./OneService";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function ServiceProvided({ Services }) {
  const navigate = useNavigate();

  const handleNavigate = (medium) => {
    navigate(`/${medium}`);
  };
  return (
    <>
      <div className="flex justify-between flex-col alignation px-12 py-4 font-fredoka">
        <h1 className="text-3xl text-white font-semibold ">
          Services Available
        </h1>
        <div className="flex gap-x-14 gap-y-10 justify-center alignation w-full pt-6 flex-wrap">
          {Services.map((service) => (
            <OneService
              key={service.tab}
              Services={service}
              handleNavigate={handleNavigate}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ServiceProvided;
