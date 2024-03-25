import React, { useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfilePage from "../PROFILE";
// import { IoMdLogOut } from "react-icons/io";

function Header({ menuShow, setMenuShow }) {
  function ShowMenu(e) {
    {
      menuShow
        ? (setMenuShow(false), (e.target.innerHTML = "&#215;"))
        : (setMenuShow(true), (e.target.innerHTML = "&#9776;"));
    }
  }
  return (
    <>
      <div>
        <div className=" w-full flex justify-between alignation px-12 py-2 m-auto overflow-hidden bg-gray-900 fixed top-0 z-30 shadow-lg shadow-gray-400/5">
          <div>
            <button onClick={ShowMenu}>
              <span className="w-12 h-12 flex justify-center items-center text-xl text-white font-extrabold hover:bg-slate-400/50 hover:text-yellow-400 rounded-full menu-toggle">
                &#9776;
              </span>
            </button>
          </div>
          <div className=" px-4">
            <span className="text-xl font-extrabold text-yellow-400 text-center">
              TAILVITE
            </span>
          </div>
          <div className="flex justify-between alignation">
            <span className="flex justify-center p-4 relative text-white cursor-pointer">
              <span className="w-5 h-5 flex justify-center align rounded-full bg-green-700 font-fredoka text-yellow-400 font-semibold text-[12px] absolute left-2 bottom-3 border-2 border-gray-900">
                3
              </span>
              <FaEnvelope size={25} />
            </span>
            <Link to="/profile">
              <button className="flex justify-between alignation rounded-full bg-gray-800 border-2 border-white">
                <span className="w-10 h-10 rounded-full "></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
