import React from "react";
import { Link } from "react-router-dom";
import FundWallet from "../SERVICES/FundWallet";

function UsersInfo() {
  return (
    <div>
      <div className="px-12 py-2 lg:flex justify-between font-fredoka">
        <div className="lg:w-1/2 lg:mr-2 my-3 bg-transparent lg:border-2 border-white/50  p-6 rounded-lg flex lg:flex-row flex-col  gap-4 justify-center alignation">
          <div className="flex justify-center flex-col lg:flex-row lg:justify-start alignation gap-3">
            <div>
              <div className="w-20 h-20 rounded-lg bg-gray-800 border-2 border-white"></div>
            </div>
            <div className="flex flex-col lg:justify-start justify-center sm:alignation text-white">
              <span className="font-semibold text-xl lg:text-2xl text-center lg:text-start">
                Adekola AbdulHakeem (Abdulhkeem9)
              </span>
              <span className="font-regular text-sm mt-1 lg:text-start">
                <span className="lg:hidden">-----------</span> Customer level
                <span className="lg:hidden"> -----------</span>
              </span>
            </div>
          </div>
          <button className=" px-4 h-10 text-xs font-bold border outline-none rounded-full text-yellow-400 hover:border-2 hover:border-green hover:bg-yellow-400 hover:text-green-700  bg-green-700 ">
            EDIT PROFILE
          </button>
        </div>
        <div className="lg:w-1/2 lg:ml-2 my-3 bg-transparent border-2 border-white/50 p-6  rounded-lg flex flex-col justify-center align-middle">
          <div className="flex justify-between pb-4 alignation">
            <div>
              <p className="small-text font-light text-white">
                Wallet Balance:
              </p>
              <p className="text-xl font-semibold text-green-700">$200.000</p>
            </div>
            <div>
              <p className="small-text font-light text-white">Bonus Balance:</p>
              <p className="text-xl font-semibold text-green-700">$100.000</p>
            </div>
          </div>
          <div className="flex justify-between alignation">
            <div>
              <p className="small-text font-light text-white">
                Amount used Today:
              </p>
              <p className="text-xl font-semibold text-green-700 ">$200.000</p>
            </div>
            <div>
              <Link to={FundWallet}>
                <button className="px-4 h-10 text-xs font-bold border outline-none rounded-full text-yellow-400 hover:border-2 hover:border-green hover:bg-yellow-400 hover:text-green-700  bg-green-700 ">
                  FUND WALLET
                </button>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default UsersInfo;
