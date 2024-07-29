import React from 'react';
import './css/Section1.css';
import logoNike from '../images/images/Group 28.png';
import logoBuzzFeed from '../images/images/Group 29.png';
import logoEsprit from '../images/images/ESPRIT.png';
import logoDW from '../images/images/Layer_1.png';
import logoHuffPost from '../images/images/layer1.png';
import image from "../images/images/Erko.png";
import logokub from "../images/images/Group 27.png";
import backgroundVideo from './video.mp4';

function Section1() {
  return (
    <div className="section1-container">
      <video className="section1-background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header className="section1-header">
        <div className="section1-content">
          <h1 className='section1-title'>WORKOUT WITH ME</h1>
          <p className="section1-description">
            A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!
          </p>
          <button className="section1-join-button">Join Club Now!</button>
          <div className="section1-stats">
            <div className="section1-stat">
              <span className="section1-number">4,95</span>
              <span className="section1-unit">km</span>
            </div>
            <div className="section1-stat">
              <span className="section1-number">350+</span>
              <span className="section1-label">Video tutorials</span>
            </div>
            <div className="section1-stat">
              <span className="section1-number">500+</span>
              <span className="section1-label">Free Workout videos</span>
            </div>
          </div>
          <span className='section1-featured'>AS FEATURED IN</span>
          <div className="section1-logos">
            <img src={logoNike} alt="Nike" />
            <img src={logoBuzzFeed} alt="BuzzFeed" />
            <img src={logoEsprit} alt="Esprit" />
            <img src={logokub} alt="Kub" />
            <img src={logoDW} alt="DW" />
            <img src={logoHuffPost} alt="HuffPost" />
          </div>
        </div>
        <div className="section1-image-container">
          {/* <img src={image} alt="Workout" className="section1-workout-image" /> */}
        </div>
      </header>
    </div>
  );
}

export default Section1;
