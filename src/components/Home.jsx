import AOS from "aos";
import React, { useEffect } from "react";
import userHome from "../assets/images/user.jpg";
import "../styles/Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const btnResume = () => {
    window.open("/MyResume.pdf", "_blank");
  };
  return (
    <div className="home" id="1" data-aos="zoom-in" data-aos-duration="1500">
      <div className="content">
        <div className="title">
          <span>01. </span>Home{"/>"}
        </div>
        <div className="intro">
          Hi , I am
          <br />
          <span>Parameswaran</span>
          <br />i <i>design</i> and Develop Websites
        </div>
        <div className="desc">
          An <span>MERN stack developer</span> with a talent for crafting
          captivating web applications. Collaborative and detail-oriented,
          brings a result-driven approach to every project.
        </div>
        <button className="connect" onClick={btnResume}>
          {"Resume"}
        </button>
      </div>
      <div className="user">
        <img src={userHome} width={400} height={400} />
      </div>
    </div>
  );
};

export default Home;
