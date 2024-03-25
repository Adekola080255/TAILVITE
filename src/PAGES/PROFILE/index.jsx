import React from "react";
import UsersInfo from "./UsersInfo";
import TrasactionDetails from "./TrasactionDetails";

function ProfilePage() {
  return (
    <>
      <div className="bg-gray-900 w-screen min-h-screen text-white">
        <header className="flex justify-center align-top w-full p-8 bg-gray-900">
          <div className="font-bold text-2xl text-center font-fredoka text-white">
            Users Profile
          </div>
        </header>
        <UsersInfo />
        <TrasactionDetails />
      </div>
    </>
  );
}

export default ProfilePage;
