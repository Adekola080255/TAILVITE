import React from "react";

function LoginForm() {
  return (
    <>
      <form className=" w-full flex justify-center alignation flex-col p-4">
        <hr />
        <h3 className="font-extrabold lg:text-xl text-lg text-center pb-3">
          Log-In
        </h3>
        <div className="flex flex-col justify-center w-full">
          <label htmlFor="user-name" className="font-semibold text-sm ">
            Username:
          </label>
          <input
            type="text"
            id="user-name"
            placeholder="Enter username"
            className="w-full border border-black p-2 rounded text-sm active:border-green-700"
          />
        </div>
        <div className="flex flex-col justify-center w-full pt-4">
          <label htmlFor="password" className="font-semibold text-sm ">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="w-full border border-black p-2 rounded text-sm active:border-green-700"
          />
          <span className="pt-2 text-sm font-light hover:text-green-700 cursor-pointer">
            Forgot Password?
          </span>
        </div>
        <button className="w-full border border-green-700 font-bold text-green-700 p-2 rounded text-sm mt-5 hover:bg-green-700 hover:text-white hover:border-white">
          LOGIN
        </button>

        <p className="font-regular text-sm mt-4">
          Don't have an account?
          <span className="font-bold hover:text-green-700 cursor-pointer">
            Sign Up
          </span>
        </p>
      </form>
    </>
  );
}

export default LoginForm;
