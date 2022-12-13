import React from "react";
import "./index.css";
import Home from "./Route/Home";
 import About from "./Route/About";
 import Project from "./Route/Project";
 import Contact from "./Route/Contact";
 import {Route,Routes} from "react-router-dom";


function App() {
  return(
    <>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/project" element = {<Project/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
