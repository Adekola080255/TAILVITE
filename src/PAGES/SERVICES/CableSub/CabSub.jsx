import React from "react";

function CabSub() {
  return (
    <>
      <div className="flex flex-col justify-center alignation font-fredoka bg-gray-900 h-screen text-white pt-24">
        <h2 className="text-4xl font-semibold p-4">Cable Subscription</h2>
        <div className="p-2">
          <form
            action=""
            className="p-4 w-80 rounded-lg shadow-lg bg-gray-800/30"
          >
            <label
              htmlFor="cable-type"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Cable Type
            </label>
            <select
              name="cable-type"
              className="w-full border border-black p-2 rounded text-sm"
            >
              <option value="0" selected hidden>
                Cable type
              </option>
              <option value="GOTV">GOTV</option>
              <option value="STARTIME">STARTIME</option>
              <option value="DSTV">DSTV</option>
            </select>

            <label
              htmlFor="cable-plan"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Cable Plan
            </label>
            <select
              name="cable-plan"
              className="w-full border border-black p-2 rounded text-sm"
            >
              <option value="0" selected hidden>
                Cable Plan
              </option>
              <option value="1000">1000</option>
              <option value="2000">2000</option>
              <option value="3000">3000</option>
            </select>

            <input
              type="number"
              placeholder="Enter IUC number"
              className="w-full border border-black p-2 mt-3 rounded text-sm"
            />

            <input
              type="password"
              placeholder="Enter Transaction pin"
              className="w-full border border-black p-2 mt-3 rounded text-sm"
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

export default CabSub;
