import React from "react";
import "./App.css";
import MyProfile from "./images/profile.png";
import GitIcon from "./images/github.png";
import SlackIcon from "./images/slack.png";
import ZuriTraining from "./images/zuri.png";
import IngressiveGood from "./images/i4g.png";

function App() {
  return (
    <div className="App">
      <div className="profile-body">
        <img className = "profile-pic"style={{ width: 88, height: 88 }} src={MyProfile} alt="profile" />
        <div id="twittername"> Joshua Akinola </div>
      </div>
      {/*<div id='slack'> Joshua Akinola </div>*/}

      {/*Links are provided below to different pages */}

      <a href="https://twitter.com/jpakinola" id="twitter">
        Twitter Link{" "}
      </a>
      <a href="https://training.zuri.team/" id="btn_zuri">
        Zuri Team{" "}
      </a>
      <a href="http://books.zuri.team/" id="books">
        Zuri Books{" "}
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=JoshuaAkinola"
        id="books__python"
      >
        Python Books
      </a>
      <a href="https://background.zuri.team/" id="pitch">
        {" "}
        Background Check for Coders{" "}
      </a>
      <a href="https://books.zuri.team/design-rules" id="book__design">
        Design Books
      </a>

      <div className="icons">
        <div className="slack">
          <img
            style={{ width: 24, height: 23 }}
            src={SlackIcon}
            alt="slackicon"
          />
        </div>
        <div className="git">
          <img style={{ width: 24, height: 23 }} src={GitIcon} alt="giticon" />
        </div>
      </div>

      <section className="footer">
        <img className="zuri" style={{ }} src={ZuriTraining} alt="zuritraining" />
        <p className="text"> Training </p>
        <div className="intern"> HNG Internship 9 Frontend Task </div>
        <img className="Ingressive" style={{width: 132, height: 32 }} src={IngressiveGood} alt="ingressive" />
      </section>


    </div>
  );
}

export default App;
