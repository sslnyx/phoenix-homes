import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  const [colorSet, setColorSet] = useState();
  // const [navHeight, getNavHeight] = useState();
  const [sideMenu, setSideMenu] = useState();
  const [secLocation, setSecLocation] = useState({});

  const app = useRef();

  const navTriggerFn = () => {
    window.scrollY >= secLocation["communities"].top - 120
      ? (setColorSet("colorSet-blue"),
        app.current.classList.add("sticky"))
      : (setColorSet(""),
        app.current.classList.remove("sticky"),
        (app.current.style = ""));

    window.scrollY >= secLocation["connect"].top - 120
      ? setSideMenu("hidden")
      : setSideMenu("");

    for (const sec in secLocation) {
      window.scrollY >= secLocation[sec].top &&
      window.scrollY <= secLocation[sec].bottom
        ? history.replaceState({}, null, [`#${sec}`])
        : "";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navTriggerFn);

    return () => {
      window.removeEventListener("scroll", navTriggerFn);
    };
  }, []);

  return (
    <Router basename="/">
      <main className="App" ref={app}>
        <NavBar {...{ colorSet }} />
        <SideBar colorSet={colorSet} sideMenu={sideMenu} />
        <Home {...{ setSecLocation }} />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
