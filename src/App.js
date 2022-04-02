import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Routes,
  Switch

} from "react-router-dom";
import "./index.css";

import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          
      
          <h1>Simple SPA</h1>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div>
       
      </div>
          <div className="content">
          
  
          <Routes>
          <Route path="/" element={<Home/>}></Route>
            <Route path="/stuff" element={<Stuff/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>


            </Routes>
      

          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main; 