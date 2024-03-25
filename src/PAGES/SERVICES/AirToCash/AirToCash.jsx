import React from "react";
// import HomeAndMenu from "../../HEADANDMENU";

function AirToCash() {
  return (
    <>
      <div className="flex flex-col justify-center alignation font-fredoka bg-gray-900 h-screen text-white pt-24">
        <div className="flex flex-col justify-center alignation font-fredoka">
          <h2 className="text-4xl font-semibold p-4">Airtime to Cash</h2>
          <div className="p-2">
            <form
              action=""
              className="p-4 w-[350px] rounded-lg shadow-lg bg-gray-800/30"
            >
              <label
                htmlFor="network"
                className="block text-sm font-medium pb-1 pt-2"
              >
                Choose Network
              </label>
              <select
                name="network"
                className="bg-transparent w-full border border-white p-2 rounded text-sm"
              >
                <option value="0" selected hidden className="bg-transparent">
                  Choose network
                </option>
                <option value="Mtn" className="bg-transparent text-black">
                  MTN
                </option>
                <option value="Airtel" className="bg-transparent text-black">
                  AIRTEL
                </option>
                <option value="Glo" className="bg-transparent text-black">
                  GLO
                </option>
                <option value="9mobile" className="bg-transparent text-black">
                  9MOBILE
                </option>
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
                className="bg-transparent w-full border border-white p-2 rounded text-sm"
              />

              <label
                htmlFor="Amount"
                className="block text-sm font-medium pb-1 pt-2"
              >
                Enter Amount
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="bg-transparent w-full border border-white p-2 rounded text-sm"
              />

              <p className="text-xs font-medium pt-2">
                Nb: The provided number should hve at least #500 of Airtime
              </p>

              <input
                type="password"
                placeholder="Enter Transaction pin"
                className="bg-transparent w-full border border-white p-2 mt-3 rounded text-sm"
              />

              <label
                htmlFor="rec-amount"
                className="block text-sm font-medium pb-1 pt-2"
              >
                Amount to Recieve
              </label>
              <input
                type="number"
                value="200"
                className="bg-transparent w-full border border-white p-2 rounded text-sm"
                disabled
              />

              <button className=" w-full mt-6 bg-green-700 py-2 rounded text-white hover:bg-green-800 font-bold text-sm">
                Withdraw
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AirToCash;
