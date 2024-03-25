import React from "react";

function ResCheck() {
  return (
    <>
      <div className="flex flex-col justify-center alignation font-fredoka bg-gray-900 h-screen text-white pt-24">
        <h2 className="text-4xl font-semibold p-4">Result Checker</h2>
        <div className="p-2">
          <form
            action=""
            className="p-4 w-80 rounded-lg shadow-lg bg-gray-800/30"
          >
            <label
              htmlFor="exam-name"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Exam Name
            </label>
            <select
              name="exam-name"
              className="w-full border border-black p-2 rounded text-sm"
            >
              <option value="0" selected hidden>
                Exam Name
              </option>
              <option value="waec">WAEC</option>
              <option value="Neco">NECO</option>
              <option value="NAPTEB">NAPTEB</option>
            </select>

            <label
              htmlFor="quantity"
              className="block text-sm font-medium pb-1 pt-2"
            >
              Quantity
            </label>
            <input
              type="number"
              placeholder="Enter Quantity"
              className="w-full border border-black p-2 rounded text-sm"
            />
            <input
              type="password"
              placeholder="Enter Transaction pin"
              className="w-full border border-black p-2 mt-3 rounded text-sm"
            />

            <button className=" w-full mt-6 bg-green-700 py-2 rounded text-white hover:bg-green-800 font-bold text-sm">
              Generate
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResCheck;
