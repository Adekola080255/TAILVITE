// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./PAGES/HOME";
// import ListOfServices from "./PAGES/SERVICES";
// import ProfilePage from "./PAGES/PROFILE";
// import BuyData from "./PAGES/SERVICES/BuyData";
// import LogIn from "./PAGES/AUTHENTICATION/LOGIN";
// import "../src/Tail.css";
// import Authentication from "./PAGES/AUTHENTICATION/AUTH";
// import TicTacToe from "./PAGES/TIC-TAC-TOE";
// import AirToCash from "./PAGES/SERVICES/AirToCash/AirToCash";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/profile/" element={<ProfilePage />} />
//         <Route path="/services" element={<ListOfServices />} />
//         <Route path="/authentication" element={<Authentication />} />
//         <Route path="/tic-tac-toe" element={<TicTacToe />} />
//         <Route path="/airtime-to-cah" element={<AirToCash />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

import React, { Suspense } from "react";
import Layout from "../src/PAGES/LAYOUT";
import { RecoilRoot } from "recoil";
import "../src/Tail.css";
import ProfilePage from "./PAGES/PROFILE";
// import LogIn from "./PAGES/AUTHENTICATION/LOGIN";
import AirToCash from "./PAGES/SERVICES/AirToCash/AirToCash";
import BonusTransfer from "./PAGES/SERVICES/BonusTransfer/BonusTranss";
import BuyData from "./PAGES/SERVICES/BuyData/BuyData";
import BuyAirtime from "./PAGES/SERVICES/BuyAirtime/BuyAirtime";
import CableSub from "./PAGES/SERVICES/CableSub/CabSub";
import ElecBill from "./PAGES/SERVICES/ElecBill/ElecBill";
import ResCheck from "./PAGES/SERVICES/ResCheck/ResCheck";
import Services from "./PAGES/SERVICES/listsser";
import ListOfServices from "./PAGES/SERVICES";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../src/PAGES/HOME";

// admin routes >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function App() {
  // window.addEventListener("scroll", () => {
  //   const scrollHeight = Math.ceil(window.scrollY);
  //   const bodyHeight = document.body.offsetHeight;
  //   const menu = document.getElementById("navbar")?.classList;
  //   if (scrollHeight >= 130 && bodyHeight >= 1200) {
  //     menu?.add("fixed");
  //   } else {
  //     menu?.remove("fixed");
  //   }
  // });

  const routes = [
    {
      path: "/",
      component: <HomePage />,
    },
    {
      path: "/profile",
      component: <ProfilePage />,
    },
    {
      path: "/services",
      component: <ListOfServices />,
    },
    {
      path: "/home",
      component: <HomePage />,
    },
    {
      path: "/airtime-to-cash",
      component: <AirToCash />,
    },
    {
      path: "/bonus-transfer",
      component: <BonusTransfer />,
    },
    {
      path: "/data",
      component: <BuyData />,
    },
    {
      path: "/airtime",
      component: <BuyAirtime />,
    },
    {
      path: "/cable-subscription",
      component: <CableSub />,
    },
    {
      path: "/electricity-bill",
      component: <ElecBill />,
    },
    {
      path: "/result-checker",
      component: <ResCheck />,
    },
  ];
  return (
    <RecoilRoot>
      <BrowserRouter basename="/">
        <Layout Services={Services}>
          <Routes>
            {routes.map(({ path, component }) => {
              return (
                <Route
                  key={path}
                  path={path}
                  element={<Suspense>{component}</Suspense>}
                />
              );
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
