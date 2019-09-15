import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faTwitter, faInstagram, faDiscord} from '@fortawesome/free-brands-svg-icons';

const TwitchPanels = () => {
  return (
    <div className="twitch-panels-container">
      <a href="https://www.youtube.com/channel/UCI9A7m0C-U2xv4PSPNl7WLA" className="panel-link" target="_blank"> 
        <div className="inner-panel-container">
          <div className="panel-icon"><FontAwesomeIcon icon={faYoutube} size="4x" /></div>
          <div className="panel-text">
            <h3>YouTube</h3>
            <p>Wolf Pack Youtube Highlights & IRL Videos now being uploaded weekly!</p>
          </div>
        </div>
      </a>
      <a href="https://twitter.com/EarlswoodTwitch" className="panel-link" target="_blank">
        <div className="inner-panel-container">
          <span className="panel-icon"><FontAwesomeIcon icon={faTwitter} size="4x" /></span>
          <span className="panel-text">
            <h3>Twitter</h3>
            <p>Check out my Twitter for updates on the stream!</p>
          </span>
        </div>
      </a>
      <div className="clear"></div>
      <a href="https://www.instagram.com/earlswoodtwitch/" className="panel-link" target="_blank">
        <div className="inner-panel-container">
          <span className="panel-icon"><FontAwesomeIcon icon={faInstagram} size="4x" /></span>
          <span className="panel-text">
            <h3>Instagram</h3>
            <p>Twitch Streamer. YouTuber. The hair is real.</p>
          </span>
        </div>
      </a>
      <a href="https://discord.gg/UhrENu3" className="panel-link" target="_blank"> 
        <div className="inner-panel-container">
          <span className="panel-icon"><FontAwesomeIcon icon={faDiscord} size="4x" /></span>
          <span className="panel-text">
            <h3>Discord</h3>
            <p>Please check out the Community Discord!<br /> A place welcome for everyone, to come chill, chat and share your channels!</p>
          </span>
        </div>
      </a>
      <div className="clear"></div>
    </div>
  )
}

export default TwitchPanels;