import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/navbar";
import EmbeddedTwitch from "./components/twitch/twitchEmbed";
import Schedule from './components/schedule/schedule';
import Sponsors from './components/sponsors/sponsors';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="App" className="App">
          <header>
            <Navbar />
          </header>
          <section id="home">
            <div id="banner">
              <img src="/img/wolf_pack_community_background.png" alt="Mute Banner" />
            </div>
            <EmbeddedTwitch targetID="twitch-embed" width="1200" height="480" channel="earlswood" />
          </section>
          <section id="schedule">
            <Schedule />
          </section>
          <section id="Sponsors">
            <Sponsors />
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
