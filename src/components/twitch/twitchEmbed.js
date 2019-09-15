import React, {Component} from "react";
import TwitchPanels from './twitchPanels';

const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

class EmbeddedTwitch extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      EMBED_URL
    );
    script.addEventListener("load", () => {
      let embed = new window.Twitch.Embed(this.props.targetID, {...this.props});
    });
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="inner-container">
        <div id="watch"></div>
        <div id={this.props.targetID}></div>
        <TwitchPanels />
      </div>
    )
  }
}

export default EmbeddedTwitch;