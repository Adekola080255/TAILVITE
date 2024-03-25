import React from "react";

function ElecBill() {
  return (
    <>
      <div className="flex flex-col justify-center alignation font-fredoka bg-gray-900 h-screen text-white pt-24">
        <h2 className="text-4xl font-semibold p-4">Electricity Bill</h2>
        <div className="p-2">
          <form
            action=""
            className="p-4 w-80 rounded-lg shadow-lg bg-gray-800/30"
          >
            <label
              htmlFor="disco"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Disco Name
            </label>
            <select
              name="disco"
              className="w-full border border-black p-2 rounded text-sm"
            >
              <option value="0" selected hidden>
                Disco Name
              </option>
              <option value="IkejaElec">Ikeja Electricity</option>
              <option value="EkoElec">Eko Electricity</option>
              <option value="KanoElec">Kano Electricity</option>
              <option value="AbujaElec">Abuja Electricity</option>
            </select>
            <label
              htmlFor="meter-type"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Meter Type
            </label>
            <select
              name="meter-type"
              className="w-full border border-black p-2 rounded text-sm"
            >
              <option value="0" selected hidden>
                Meter Type
              </option>
              <option value="prepaid">Prepaid</option>
              <option value="postpaid">Postpaid</option>
            </select>
            <label
              htmlFor="meter-number"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Meter Number
            </label>
            <input
              type="number"
              placeholder="Enter meter number"
              className="w-full border border-black p-2 rounded text-sm"
            />
            <input
              type="password"
              placeholder="Enter Transaction pin"
              className="w-full border border-black p-2 mt-3 rounded text-sm"
            />
            <label
              htmlFor="bill-amount"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Enter Amount
            </label>
            <input
              type="number"
              placeholder="Enter Amount"
              className="w-full border border-black p-2 rounded text-sm"
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

export default ElecBill;
