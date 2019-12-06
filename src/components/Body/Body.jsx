import React from "react";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
      <Route path='/Portfolio'>
      <section className="section-container">
        <h2 className='section-title'> Projects</h2>
        <Portfolio />
      </section>
      </Route>
    </div>
  );
};

export default Body;
