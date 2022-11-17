import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function Home() {
    const [darkmode, setDarkmode] = useState(false)
  return (
    <div className="App" >
      <div className="background">
        <div className="logo row">
          <p>team</p>
          <div className="square"></div>
          <div className="menu">
            <div className="menu-item">
              <label className="switch">
                <input id="checkbox" onClick={() => setDarkmode(!darkmode)} type={"checkbox"} />
                <span className="slider round"></span>
              </label>
            </div>
            <Link to="/Blog">Blog</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Login">Log In</Link>
            <button className="access">Get Access</button>
          </div>
        </div>
        <div className="main">
          <div className="topic">Instant collaborations for remote teams</div>
          <div className="tinyTopic">
            All in one for your remote team chats, collaboration and track
            projects
          </div>
          <div className="row">
            <input
              className="emailInput"
              placeholder="Email"
              type={"email"}
            ></input>
            <button className="accessButton">Get Early Access</button>
          </div>
        </div>
      </div>
      <div className="gap"></div>
      <div id="mid" className={`mid ${darkmode && 'dark'}`}>
        <div className="item">
          <div className="info">
            <h1 className="h1">Your Hub for teamwork</h1>
            <p>
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
          </div>
          <div className="picture">
            <img className="event" src={require("../images/event.png")} />
            <img className="meetings" src={require("../images/Meeting.png")} />
          </div>
        </div>
        <div className="item">
          <div className="picture">
            <img className="stuff" src={require("../images/event2.png")} />
            <img className="stuff lol" src={require("../images/event.png")} />
            <img className="unsplsh" src={require("../images/unsplash.png")} />
          </div>
          <div className="info1">
            <h1 className="h1">Simple Task Management</h1>
            <p>
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="info">
            <h1 className="h1">Scheduling that actually works</h1>
            <p>
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
          </div>
          <div className="picture">
            <img className="event1" src={require("../images/calendar.jpg")} />
            <img className="meetings" src={require("../images/other.png")} />
          </div>
        </div>
        <div className="item1">
          <h1 className="topiccc">What people say about us</h1>
          <div className="reviews">
            <Avatar text="" />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
        </div>
      </div>
      <div className="end">
        <div className="first">
          <div className="together">
            <p>team</p>
            <div className="square"></div>
          </div>
          <p className="b">Use Cases</p>
          <p className="a">Explore</p>
          <p className="a">Resources</p>
        </div>
        <div className="next">
          <div className="column">
            instagram facebook twitter instagram facebook twitter
          </div>
          <div className="column">
            UI Design UX Design Prototyping UI Design UX Design Prototyping
          </div>
          <div className="column">
            Figma Customers Why I love figma Figma Customers Why I love figma
          </div>
          <div className="column">
            Community Resources Hub Support Education Community Resources Hub
            Support Education
          </div>
        </div>
      </div>
    </div>
  );
}

const Avatar = ({ text, name }) => {
  return (
    <div className="box">
      <div className="stars">⭐⭐⭐⭐⭐</div>
      <div className="info2">
        Give everyone you work with- inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </div>
      <div className="row1">
        <div className="publisher">
          <img src={require("../images/Ellipse.png")} />
        </div>
        <div className="publisher-name">Amy Klassen</div>
      </div>
    </div>
  );
};

export default Home;
