import React, { useEffect, useState } from "react";
import "../src/Styles/App.css";
import { useLocation } from "react-router-dom";
import logo from "../src/img/logo.png";
import { Link, Route, Routes } from "react-router-dom";
const App = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <div className="navbar">
        <img src={logo} className="logo" alt="" />
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/about">About</Link>
      </div>
      {path === "/" ? (
        <>
          <h3 className="paragraph">
            Marvel Studios, LLC[5] (originally known as Marvel Films from 1993
            to 1996) is an American film and television production company that
            is a subsidiary of Walt Disney Studios, a division of Disney
            Entertainment, which is owned by the Walt Disney Company. Marvel
            Studios produces thes Marvel Cinematic Universe (MCU) films and
            series, based on characters that appear in Marvel Comics
            publications.[6] Since 2008, Marvel Studios has released 32 films
            within the MCU, from Iron Man (2008) to Guardians of the Galaxy Vol.
            3 (2023), eight television series since 2021, from WandaVision
            (2021) to She-Hulk: Attorney at Law (2022), and two television
            specials, Werewolf by Night (2022) and The Guardians of the Galaxy
            Holiday Special (2022). The television series What If...? (2021) is
            the studio's first animated property, created by its "mini-studio"
            Marvel Studios Animation.[1] These films, television series, and
            television specials all share continuity with each other, along with
            the One-Shots short films produced by the studio. The television
            series produced by Marvel Television also acknowledge the
            continuity. The Avengers (2012), Iron Man 3 (2013), Avengers: Age of
            Ultron (2015), Captain America: Civil War (2016), Black Panther
            (2018), Avengers: Infinity War (2018), Captain Marvel (2019),
            Avengers: Endgame (2019), Spider-Man: Far From Home (2019) and
            Spider-Man: No Way Home (2021) are all among the 50 highest-grossing
            films of all time, with Avengers: Endgame becoming the
            highest-grossing film of all time from July 2019 until March 2021.
            In addition to the MCU, Marvel Studios was also involved with the
            production of other Marvel-character film franchises that have
            exceeded $1 billion in North American box office revenue, including
            the X-Men and Spider-Man multi-film franchises.
          </h3>
        </>
      ) : ""}
    </>
  );
};

export default App;
