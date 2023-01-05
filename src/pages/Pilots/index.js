import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";
import Team from "../../components/Team/team";
import api from "../../data/api";
import "./pilots.css";
function Pilots() {
  const [drivers, setDrivers] = useState();
  const [teams, setTeams] = useState();

  const getDrivers = async () => {
    await api.get("/drivers").then((res) => {
      setDrivers(res.data);
    });
  };

  const getTeams = async () => {
    await api.get("/teams").then((res) => {
      setTeams(res.data);
    });
  };

  const createTeam = () => {
    var teamData = [];
    teams.forEach((t) => {
      var r = drivers.filter((d) => d.driver_team === t.team_name);
      teamData.push({
        teamname: t.team_name,
        teamlogo: require("../../assets/images/logos/" + t.team_logo),
        driver1: r[0]?.driver_name,
        driver2: r[1]?.driver_name,
        car: require("../../assets/images/cars/" + t.team_logo),
      });
    });
    return teamData;
  };

  useEffect(() => {
    getDrivers();
    getTeams();
  }, []);


  return (
    <div className="Pilots">
      <NavBar />
      <div className="pilots-container">
        {
          <div className="teams">
            {teams && drivers && createTeam().map((t, i) => (
              <div id={"team" + i} key={i} className="team">
                <Team
                  teamname={t.teamname}
                  teamlogo={t.teamlogo}
                  driver1={t.driver1}
                  driver2={t.driver2}
                  car={t.car}
                />
              </div>
            ))}
          </div>
        }
      </div>

      <Footer />
    </div>
  );
}

export default Pilots;
