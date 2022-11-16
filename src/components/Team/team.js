import React from "react";
import "./team.css";

function Team(props) {
  return (
    <div className="team">
      <div className="team-container">
        <div className="team-stuff">
          <img src={props.teamlogo} alt="teamlogo" width={150} />{" "}
          {props.teamname}
        </div>
        <div className="drivers">
          <p>{props.driver1}</p>
          <p>{props.driver2}</p>
        </div>
        <div className="car">
          <img src={props.car} alt="car" width={400} />
        </div>
      </div>
    </div>
  );
}

export default Team;
