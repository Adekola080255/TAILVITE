import React from "react";
import Header from "./Header";
import MenuBar from "./MenuBar";
import { useState } from "react";

function HomeAndMenu({ Services }) {
  const [menuShow, setMenuShow] = useState(true);
  const [servicePage, setServicePage] = useState("");
  return (
    <>
      <Header menuShow={menuShow} setMenuShow={setMenuShow} />
      <MenuBar
        menuShow={menuShow}
        setMenuShow={setMenuShow}
        servicePage={servicePage}
        setServicePage={setServicePage}
        Services={Services}
      />
    </>
  );
}

export default HomeAndMenu;
