import React from "react";
import "./Navbar.css";
import {useNavigate} from "react-router";
import { AiFillVideoCamera } from "react-icons/ai";


function Navbar(props) {
  const navigate=useNavigate();

  return props.vis ? (
    <nav className="nav">
      <input className="input" placeholder="Search 8000+ tutorials" />
      <p>FreeCodeCamp.Org</p>
      <div className="buttons">
        <button className="sign-in-button" onClick={()=>{navigate("/login")}}>Sign In</button>
        <button onClick={()=>{navigate("/")}}>Menu</button>
      </div>
    </nav>
  ) : (
    <nav className="nav">
      <input className="input" placeholder="Search 8000+ tutorials" />
      <p>FreeCodeCamp.Org</p>
      <div className="buttons">
      <button className="sign-in-button hide" onClick={()=>{navigate("/login")}}>Sign In</button>
        <button onClick={()=>{navigate("/")}}>Menu</button>
      </div>
    </nav>
  );
}

export default Navbar;
