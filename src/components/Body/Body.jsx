import React from "react";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import "./Body.css";

let Body = props => {
  return (
    <div>
      <div className="title-container">
        <h1 className='title'>{props.title}</h1>
      </div>
      <section className="section-container">
        <h2 className='section-title'> About</h2>
        <About />
      </section>
      <section className="section-container">
        <h2 className='section-title'> Projects</h2>
        <Portfolio />
      </section>
    </div>
  );
};

export default Body;
