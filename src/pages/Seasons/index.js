import React from "react";
import NavBar from "../../components/NavBar/navbar";
import "./seasons.css";

function Seasons() {
  return (
    <div className="Seasons">
      <NavBar />
      <div className="seasons-container">
        <div className="season1-container season">
          <h3>F1 2021 1.Sezon</h3>
          <img src={require("../../assets/images/f12021_pilotlar.png")} alt="1.sezon pilotlar"/>
          <img src={require("../../assets/images/f12021_takmlar.png")} alt="1.sezon takımlar"/>
        </div>
        <div className="season2-container season">
          <h3>F1 2021 2.Sezon</h3>
          <img src={require("../../assets/images/f12021_2.sezon_pilotlar.png")} alt="2.sezon pilotlar"/>
          <img src={require("../../assets/images/f12021_2.sezon_takmlar.png")} alt="2.sezon takımlar"/>
        </div>
        <div className="season3-container season">
          <h3>F1 22 1.Sezon</h3>
          <img src={require("../../assets/images/f122_sezon1_pilotlar.png")} alt="f122 1.sezon pilotlar"/>
          <img src={require("../../assets/images/f122_sezon1_takım.jpg")} alt="f122 1.sezon takımlar"/>
        </div>
      </div>
    </div>
  );
}

export default Seasons;
