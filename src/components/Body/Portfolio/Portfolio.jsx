import React from "react";
import "./Portfolio.css";

let Portfolio = () => {
  return (
    <div>
      <section className='section-header'>
        <h3 className="project-header">Web Applications</h3>
        <h4 className='project-title'>2048</h4>
        <h4 className='project-title'>What's In My Fridge Foo?</h4>
        <h4 className='project-title'>My Car Diary</h4>
        <h4 className='project-title'>Hit Me Up Fam!</h4>
      </section>

      <section className='section-header'>
        <h3 className="project-header">Animation</h3>
        <h4 className='project-title'>Digital</h4>
        <h4 className='project-title'>Stop-Motion</h4>
      </section>

      <section className='section-header'>
        <h3 className="project-header">Digital Media</h3>
        <h4 className='project-title'>Adobe Illustrator</h4>
        <h4 className='project-title'>Adobe Photoshop</h4>
        <h4 className='project-title'>Adobe InDesign</h4>
      </section>

    
    </div>
  );
};

export default Portfolio;
