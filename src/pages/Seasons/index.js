import React from "react";
import NavBar from "../../components/NavBar/navbar";
import "./seasons.css";

function Seasons() {
  return (
    <div className="Seasons">
      <NavBar />
      <div className="seasons-container">
        <div className="season1-container">
          <h3>1.Sezon</h3>
          <img src={require("../../assets/images/f12021_pilotlar.png")} alt="1.sezon pilotlar"/>
          <img src={require("../../assets/images/f12021_takmlar.png")} alt="1.sezon takımlar"/>
        </div>
        <div className="season2-container">
          <h3>2.Sezon</h3>
          <img src={require("../../assets/images/f12021_2.sezon_pilotlar.png")} alt="2.sezon pilotlar"/>
          <img src={require("../../assets/images/f12021_2.sezon_takmlar.png")} alt="2.sezon pilotlar"/>
        </div>
      </div>
    </div>
  );
}

export default Seasons;
