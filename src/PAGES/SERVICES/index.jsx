import React from "react";
import ServiceProvided from "../HOME/ServiceProvided";
import Services from "./listsser";
// import HomeAndMenu from "../HEADANDMENU";

function ListOfServices() {
  return (
    <>
      <div className="m-auto w-screen bg-gray-900">
        <ServiceProvided Services={Services} />
      </div>
    </>
  );
}

export default ListOfServices;
