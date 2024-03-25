import React from "react";
import LoginForm from "./loginForm";

function LogIn() {
  return (
    <>
      <div className="lg:py-12 flex  alignation flex-col m-auto h-auto w-11/12 lg:w-96">
        <div className="flex justify-center alignation flex-col w-full shadow-md p-4 rounded-lg">
          <h1 className="text-center font-black lg:text-3xl text-2xl pb-2 text-green-700">
            Welcome Back!!!
          </h1>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LogIn;
