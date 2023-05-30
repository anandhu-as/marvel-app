import React, { useEffect, useState } from "react";
import "../src/Styles/App.css";
import logo from "../src/img/logo.png";

import Comic from "./Components/Comics/Comic";
import { Link, Route, Routes } from "react-router-dom";
import Character from "./Components/Characters/Character";
const App = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="" />
        <Link to="/comic">Comic</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/comic">About</Link>
      </div>

      <Routes>
        <Route path="/characters" Component={Character} />
      </Routes>
    </>
  );
};

export default App;
