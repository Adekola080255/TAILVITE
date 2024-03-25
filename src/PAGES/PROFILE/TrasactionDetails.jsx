import React from "react";

function TrasactionDetails() {
  return (
    <>
      <div className="font-fredoka px-12 py-6 bg-transparent border-1 border-white">
        <h2 className="font-bold text-xl pb-3">Transaction Details</h2>
        <div>
          <div className="bg-transparent overflow-hidden rounded-2xl border border-gray-200">
            <div className="p-4 flex justify-between align-middle hover:bg-gray-100/5 cursor-pointer">
              <span className="flex profile">
                <span className="pl-1">Total Transaction History</span>
              </span>
              &#62;
            </div>
            <div className="p-4 flex justify-between align-middle hover:bg-gray-100/5 cursor-pointer">
              <span className="flex profile">
                <span className="pl-1">Deposit Summary</span>
              </span>
              &#62;
            </div>
            <div className="p-4 flex justify-between align-middle hover:bg-gray-100/5 cursor-pointer">
              <span className="flex profile">
                <span className="pl-1">Manual Funding Details</span>
              </span>
              &#62;
            </div>
            <div className="p-4 flex justify-between align-middle hover:bg-gray-100/5 cursor-pointer">
              <span className="flex profile">
                <span className="pl-1">Daily Transaction Details</span>
              </span>
              &#62;
            </div>
          </div>
          <div className="bg-transparent overflow-hidden mt-5 rounded-xl border border-gray-200">
            <div className="p-4 flex justify-between align-middle hover:bg-gray-100/5 cursor-pointer">
              <span className="flex profile">
                <span className="pl-1 text-red-700 font-bold">LogOut</span>
              </span>
              &#62;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrasactionDetails;
