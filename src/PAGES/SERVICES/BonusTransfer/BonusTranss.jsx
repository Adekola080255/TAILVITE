import React from "react";

function BonusTransfer() {
  return (
    <>
      <div className="flex flex-col justify-center alignation font-fredoka bg-gray-900 h-screen text-white pt-24">
        <h2 className="text-4xl font-semibold p-4">Bonus Transfer</h2>
        <div className="p-2">
          <form
            action=""
            className="p-4 w-80 rounded-lg shadow-lg bg-gray-800/30"
          >
            <label
              htmlFor="bonus-amount"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Enter Amount
            </label>
            <input
              type="number"
              placeholder="Enter bonus amount"
              className="w-full border border-black p-2 rounded text-sm"
            />

            <input
              type="password"
              placeholder="Enter Transaction pin"
              className="w-full border border-black p-2 mt-3 rounded text-sm"
            />

            <label
              htmlFor="amount-to-recieve"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Amount to Recieve
            </label>
            <input
              type="number"
              value="200"
              className="w-full border border-black p-2 rounded text-sm"
              disabled
            />

            <button className=" w-full mt-6 bg-green-700 py-2 rounded text-white hover:bg-green-800 font-bold text-sm">
              Withdraw
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BonusTransfer;
