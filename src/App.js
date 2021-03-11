import React, { useState } from "react";
import "./App.css";
import Script from "react-inline-script";
import logo from "./default-white.png";
import logo2 from "./default.png";
function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <a href="#">
              {" "}
              <img src={logo} width="198" height="60" />
            </a>
          </div>
          <div id="mainListDiv" className={isActive? "main_list show_list":"main_list"}>
            <ul className="navlinks">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <span
            className={isActive ? "navTrigger active" : "navTrigger"}
            onClick={() => setIsActive(!isActive)}
          >
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>

      <section className="home"></section>
      <div style={{ height: "1000px" }}>
        <h2 className="myH2">
          <img src={logo2} />
        </h2>
        <p className="myP">
          This is a responsive fixed navbar animated on scroll
        </p>
        <p className="myP">
          I took inspiration from ABDO STEIF (
          <a href="https://codepen.io/abdosteif/pen/bRoyMb?editors=1100">
            https://codepen.io/abdosteif/pen/bRoyMb?editors=1100
          </a>
          ) and Dicson{" "}
          <a href="https://codepen.io/dicson/pen/waKPgQ">
            (https://codepen.io/dicson/pen/waKPgQ)
          </a>
        </p>
        <p className="myP">I HOPE YOU FIND THIS USEFULL</p>
        <p className="myP">Albi</p>
        <p className="myP">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          ratione facere animi impedit rem labore sint repellendus ipsa sapiente
          voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem
          beatae id inventore quod voluptate qui deserunt, quis placeat, tempora
          ex totam, dolore sequi harum eos voluptatibus animi labore officiis
          minus laboriosam Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum ratione facere animi impedit rem labore sint repellendus
          ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque.
          Voluptatem beatae id inventore quod voluptate qui deserunt, quis
          placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi
          labore officiis minus laboriosam Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum ratione facere animi impedit rem
          labore sint repellendus ipsa sapiente voluptatem aut excepturi quo
          itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate
          qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos
          voluptatibus animi labore officiis minus laboriosam Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Ipsum ratione facere animi
          impedit rem labore sint repellendus ipsa sapiente voluptatem aut
          excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore
          quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore
          sequi harum eos voluptatibus animi labore officiis minus laboriosam
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          ratione facere animi impedit rem labore sint repellendus ipsa sapiente
          voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem
          beatae id inventore quod voluptate qui deserunt, quis placeat, tempora
          ex totam, dolore sequi harum eos voluptatibus animi labore officiis
          minus laboriosam
        </p>
      </div>
    </div>
  );
}

export default App;
