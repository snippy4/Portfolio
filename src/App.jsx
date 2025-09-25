import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

/*
IMPORTS ALL PAGES
*/
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
