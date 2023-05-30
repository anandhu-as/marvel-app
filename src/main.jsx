import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Character from "./Components/Characters/Character.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/characters" Component={Character} />
      
        <Route path="*"/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
