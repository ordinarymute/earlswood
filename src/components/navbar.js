import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to="/"id="brand-logo">
        <img src="img/wolf_pack_logo.png" alt="Mute Words" />
        <h1>Earlswood</h1>
      </Link>
      <div id="nav-links">
        <ul className="right">
          <li><a href="https://www.twitch.tv/earlswood" target="_blank" className="twitch-button">
            <span className="twitch-button-left">Follow</span>
            <span className="twitch-button-right"><FontAwesomeIcon icon={faHeart} /></span>
          </a></li>
          <li><a href="https://www.twitch.tv/subs/earlswood" target="_blank" className="twitch-button">
            <span className="twitch-button-left">Subscribe</span>
            <span className="twitch-button-right">$4.99</span>
          </a></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li className="nav-border"><NavLink to="#watch">Watch</NavLink></li>
          <li className="nav-border"><NavLink to="/">Schedule</NavLink></li>
          <li className="nav-border"><NavLink to="/">Sponsors</NavLink></li>
          <li className="nav-border"><NavLink to="/">Contact</NavLink></li>
          <li className="nav-border"><NavLink to="/">Merch</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;