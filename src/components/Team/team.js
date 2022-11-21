import React from "react";
import "./team.css";

function Team(props) {
  return (
    <div className="team">
      <div className="team-container">
        <div className="team-stuff">
          <img className="teamlogo" src={props.teamlogo} alt="teamlogo" />{" "}
          {props.teamname}
        </div>
        <div className="drivers">
          <p>{props.driver1}</p>
          <p>{props.driver2}</p>
        </div>
        <div className="car">
          <img className="teamcar" src={props.car} alt="car" />
        </div>
      </div>
    </div>
  );
}

export default Team;
