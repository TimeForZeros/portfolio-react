import React from "react";
import About from "./About/About";
import './Body.css';

let Body = props => {
  return (
    <div>
        <div className="item-container">
          <h1>{props.title}</h1>
          <h3> Nothing Matters</h3>
        </div>
        <section>
            <h2> About</h2>
            <About />
            <h2> Projects</h2>
        </section>
    </div>
  );
};

export default Body;
