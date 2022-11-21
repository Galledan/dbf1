import React, { useRef } from "react";
import "./main.css";
import NavBar from "../../components/NavBar/navbar";
import videoBg from "../../assets/videos/videoBg.mp4";
import { TwitchEmbed } from "react-twitch-embed";
import Footer from "../../components/Footer/footer";
import DriverTable from "../../components/Tables/DriverTable";
import TeamTable from "../../components/Tables/TeamTable";

function Main() {
  const embed = useRef();

  const handleReady = (e) => {
    embed.current = e;
  };

  return (
    <div className="Main">
      <NavBar />
      <div className="main-container">

        <div className="header">
          <video src={videoBg} autoPlay loop muted />   
        </div>

        <div className="rest-container">
          <div className="welcome-container">
            <h1>Damalı Bayrak F1 Ligi</h1>
            <div className="welcome-content">
              <p>
                Merhaba, sitemize hoşgeldiniz. Damalı Bayrak F1 Ligimizin F1 22
                ilk sezonu 9 Kasım Çarşamba 22.00'da Bahreyn'de başlıyor. Sezonu
                takip etmek ve diğer sezonlarda ligimize dahil olmak için
                sitemize göz gezdirebilirsin.
              </p>
              <iframe
                className="intro-frame"
                title="intro"
                frameborder="0"
                src="https://www.youtube.com/embed/pa23eW6LKsM"
              />
            </div>
          </div>
          <div className="board-leaderboard-container">
            <h1>Puan Tabloları</h1>
            <div className="tables">
              <div className="driver-table table">
                <h3>Sürücüler Tablosu</h3>
                <DriverTable isAdmin={false} />
              </div>
              <div className="team-table table">
                <h3>Takımlar Tablosu</h3>
                <TeamTable isAdmin={false} />
              </div>
            </div>
          </div>

          <div className="stream-container">
            <h1>Yayın</h1>
            <TwitchEmbed
              channel="damalibayrakf1"
              autoplay
              withChat
              darkMode
              hideControls
              onVideoReady={handleReady}
              width="100%"
              height="80%"
            />
          </div>

          <div className="discord-container">
            <h1>Discordumuz</h1>
            <div className="discord-content">
              <iframe
                className="discord-frame"
                title="dc"
                src="https://discord.com/widget?id=750462342244073523&theme=dark"
                allowtransparency="true"
                frameborder="0"
                height="480"
                width="854"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
              <p>
                Discord serverımıza katılarak ligi ve duyuruları daha yakından
                takip edebilirsin.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
