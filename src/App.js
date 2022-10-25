import React from "react";
import './App.css'
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="row">
          <p>team</p>
          <div className="square"></div>
          <div className="menu">
            <div className="menu-item">Products</div>
            <div className="menu-item">Services</div>
            <div className="menu-item">Contact</div>
            <div className="menu-item">Log in</div>
            <button className="access">Get Access</button>
          </div>
        </div>
        <div className="main">
          <div className="topic">Instant collaborations for remote teams</div>
          <div className="tinyTopic">All in one for your remote team chats, collaboration and track projects</div>
          <div className="row">
            <input className="emailInput" placeholder="Email" type={'email'}></input>
            <button className="accessButton">Get Early Access</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;