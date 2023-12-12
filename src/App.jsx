import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { FallingLines } from "react-loader-spinner";
import AOS from "aos";

function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <FallingLines
            color="#ffffff"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      ) : (
        <div className="app">
          <Navbar />
          <div className="page">
            <Home />
            <About />
            <Experience />
            <Work />
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
