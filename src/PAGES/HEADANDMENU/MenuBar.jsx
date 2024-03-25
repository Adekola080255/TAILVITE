import React from "react";
import { useNavigate } from "react-router-dom";

function MenuBar({ menuShow, Services, setMenuShow }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={menuShow ? "hide" : " font-fredoka "}>
        <div className="w-full h-full fixed bg-black/20 z-10 top-0 transition-all"></div>
        <div className="fixed z-20 transition-all">
          <div className="h-full fixed w-72 bg-gray-800 left-0 mt-2">
            <div className="cursor-pointer text-white">
              <div className="font-semibold text-2xl px-4 py-6 bg-gray-900 border-y-2 border-green-700 text-white">
                Abdulhakeem9
              </div>
              <div
                onClick={() => {
                  navigate("/");
                }}
                className="flex gap-2 p-4 hover:bg-gray-100/10 hover:pl-5 hover:border-l-8 hover:border-l-green-700 transition-all"
              >
                <span className="text-lg font-medium">Home</span>
              </div>
              <div>
                <div
                  onClick={() => {
                    navigate("/services");
                  }}
                  className="flex gap-2 p-4 hover:bg-gray-100/10 hover:pl-5 hover:border-l-8 hover:border-l-green-700 transition-all"
                >
                  <span className="text-lg font-medium">Services</span>
                </div>

                <div className="h-32 overflow-y-scroll m-2 border rounded-md ">
                  {Services.map((service) => {
                    return (
                      <div
                        key={service.tab}
                        className="flex gap-2 p-4 hover:bg-gray-100/10"
                        onClick={() => {
                          navigate(`/${service.tab}`);
                        }}
                      >
                        <span className="text-lg font-medium">
                          {service.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex gap-2 p-4 hover:bg-gray-100/10 hover:pl-5 hover:border-l-8 hover:border-l-green-700 transition-all">
                <span className="text-lg font-medium">Transaction History</span>
              </div>
              <div className="flex gap-2 p-4 hover:bg-gray-100/10 hover:pl-5 hover:border-l-8 hover:border-l-green-700 transition-all">
                <span className="text-lg font-medium">Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
