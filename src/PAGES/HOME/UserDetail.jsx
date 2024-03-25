import React from "react";
import { Link } from "react-router-dom";
import FundWallet from "../SERVICES/FundWallet";

function UserDetail() {
  return (
    <>
      <div className="px-12 py-6 lg:flex justify-between font-fredoka mt-16">
        <div className="lg:w-1/2 lg:mr-2 my-3 bg-gradient-to-br from-green-700 to-blue-900 text-white p-6 rounded-lg flex flex-col justify-center align-middle">
          <p className="text-xs font-ligh text-yellow-400">Welcome back!!!</p>
          <p className="font-semibold text-3xl pb-4">Abdulhakeem9</p>
          <p className="text-xs italic font-light">
            <span className="font-bold">NB:</span> Your account has been
            activated sucessfully. To fund your wallet click on the
            <span className=""> "FUND WALLET"</span> button around and follow
            the steps thoroughly. Refer your friend to our website and recieve
            Bonuses. Don't forget we provide the best.
          </p>
        </div>
        <div className="lg:w-1/2 lg:ml-2 my-3 bg-gradient-to-bl from-green-700 to-blue-900 text-white p-6 rounded-lg flex flex-col justify-center align-middle">
          <div className="flex justify-between pb-4 alignation">
            <div>
              <p className="small-text font-light text-yellow-400">
                Wallet Balance:
              </p>
              <p className="text-xl font-semibold">$200.000</p>
            </div>
            <div>
              <p className="small-text font-light text-yellow-400">
                Bonus Balance:
              </p>
              <p className="text-xl font-semibold">$100.000</p>
            </div>
          </div>
          <div className="flex justify-between alignation">
            <div>
              <p className="small-text font-light text-yellow-400">
                Amount used Today:
              </p>
              <p className="text-xl font-semibold">$200.000</p>
            </div>
            <div>
              <Link to={FundWallet}>
                <button className="px-3 py-2 text-xs font-bold border outline-none rounded-full text-yellow-400 bg-gradient-to-tl hover:bg-gradient-to-tr from-white/25 to-white/0 ">
                  FUND WALLET
                </button>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;
