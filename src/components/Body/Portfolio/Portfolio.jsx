import React from "react";
import "./Portfolio.css";

let Portfolio = () => {
  return (
    <div>
      <section className="section-header">
        <h3 className="project-header">Web Applications</h3>
        <h4 className="project-title">2048</h4>
        <a href="http://timefor2048.herokuapp.com/">
          <img src="https://i.imgur.com/qRSECyn.png" title="2048" />
        </a>
        <h4 className="project-title">What's In My Fridge Foo?</h4>
        <a href="http://whatsinmyfridgefoo.herokuapp.com/users">
          <img
            alt="What's in My Fridge, Foo?"
            src="https://i.imgur.com/9xBhHhe.png"
            title="What's in My Fridge, Foo?"
          />
        </a>
        <h4 className="project-title">My Car Diary</h4>
        <h4 className="project-title">Hit Me Up Fam!</h4>
      </section>

      <section className="section-header">
        <h3 className="project-header">Animation</h3>
        <h4 className="project-title">Digital</h4>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/177668340" width="640" height="360" frameborder="0" allowfullscreen></iframe>
        <h4 className="project-title">Stop-Motion</h4>
        <iframe src="https://player.vimeo.com/video/148822669" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <iframe src="https://player.vimeo.com/video/148978519" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </section>

      <section className="section-header">
        <h3 className="project-header">Digital Media</h3>
        <h4 className="project-title">Adobe Illustrator</h4>
        <img src="https://i.imgur.com/vhsKIbJ.jpg" title="source: imgur.com" />
        <br/>
        <img src="https://i.imgur.com/zQLzF2h.png" title="source: imgur.com" />
        <br/>
        <img src="https://i.imgur.com/0jdkj5r.png" title="source: imgur.com" />

        <h4 className="project-title">Adobe Photoshop</h4>
        <img src="https://i.imgur.com/Tqg39iq.png" title="source: imgur.com" />
        <br/>
        <img src="https://i.imgur.com/qNOe0qC.png" title="source: imgur.com" />
        <h4 className="project-title">Adobe InDesign</h4>
        <img
          src="https://i.imgur.com/1czox8m.jpg"
          title="Jenny Holzer Book Cover"
        />
      </section>
    </div>
  );
};

export default Portfolio;
