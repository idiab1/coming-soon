import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import './style.css';

import VideoBg from "../src/assets/video.mp4";

function App() {
  return (
    <section className="page">
      <div className='overlay'></div>
      <video src={VideoBg} autoPlay loop muted></video>
      <div className='page__content'>
        <h1>Lounching Soon</h1>
        <h3>Leave your email and we'll let you know once the site goes live.</h3>
        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          />
          <button className='btn'>Notify me</button>
      </div>
    </section>
  );
}

export default App;
