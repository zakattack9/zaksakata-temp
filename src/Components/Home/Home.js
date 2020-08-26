import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { LinkedIn, GitHub, Medium } from '../../SVGs/SVG';
import Loader from '../../Components/Loader/Loader';
import './Home.scss';

const Home = () => {
  useEffect(() => {
    
  }, []); // eslint-disable-line

  return (
    <div className="Home">
      <Loader className="Home__Loader" />
      <div className="Home__main">
        <div className="Home__header">Welcome!</div>
        <div className="Home__message">
          This site is currently under construction,<br/>
          but you can contact me through <a className="Contact__contactText--email" href="mailto:sakata.zak@gmail.com">email</a><br/>
          or check out my socials below.
        </div>
        <div className="Home__socials">
          <GitHub className="Home__social Home__social--GitHub" />
          <LinkedIn className="Home__social Home__social--LinkedIn" />
          <Medium className="Home__social Home__social--Medium" />
        </div>
      </div>
    </div>
  );
}

export default Home;