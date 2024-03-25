import React from "react";

function BuyData() {
  return (
    <>
      <div className="flex flex-col justify-center alignation font-fredoka bg-gray-900 h-screen text-white pt-24">
        <h2 className="text-4xl font-semibold p-4">Buy Data</h2>
        <div className="p-2">
          <form
            action=""
            className="p-4 w-80 rounded-lg shadow-lg bg-gray-800/30"
          >
            <label
              htmlFor="network"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Choose Network
            </label>
            <select
              name="network"
              className="w-full border border-black p-2 rounded text-sm"
            >
              <option value="0" selected hidden>
                Choose network
              </option>
              <option value="Mtn">MTN</option>
              <option value="Airtel">AIRTEL</option>
              <option value="Glo">GLO</option>
              <option value="9mobile">9MOBILE</option>
            </select>

            <label
              htmlFor="network"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Data Type
            </label>
            <select
              name="network"
              className="w-full border border-black p-2 rounded text-sm"
            >
              <option value="0" selected hidden>
                Choose data type
              </option>
              <option value="SME">SME</option>
              <option value="GIFTING">GIFTING</option>
              <option value="CG">CG</option>
            </select>

            <label
              htmlFor="network"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Data Plan
            </label>
            <select
              name="network"
              className="w-full border border-black p-2 rounded text-sm"
            >
              <option value="0" selected hidden>
                Choose data plan
              </option>
              <option value="1GB">1GB</option>
              <option value="2GB">2GB</option>
              <option value="3GB">3GB</option>
              <option value="5GB">5GB</option>
            </select>

            <label
              htmlFor="phone-number"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Enter Reciepent Number
            </label>
            <input
              type="number"
              placeholder="Enter phone-number"
              className="w-full border border-black p-2 rounded text-sm"
            />

            <input
              type="password"
              placeholder="Enter Transaction pin"
              className="w-full border border-black p-2 mt-3 rounded text-sm"
            />

            <label
              htmlFor="total-amount"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Total Amount
            </label>
            <input
              type="number"
              value="200"
              className="w-full border border-black p-2 rounded text-sm"
              disabled
            />

            <button className=" w-full mt-6 bg-green-700 py-2 rounded text-white hover:bg-green-800 font-bold text-sm">
              Purchase
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BuyData;
