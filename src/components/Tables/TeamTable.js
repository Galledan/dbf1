import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import api from "../../data/api";

function TeamTable(props) {
  const [teams, setTeams] = useState();

  const [name, setName] = useState();
  const [logo, setLogo] = useState();
  const [point, setPoint] = useState();
  const [teamId, setTeamId] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getTeams = async () => {
    await api.get("/teams").then((res) => {
      setTeams(res.data);
    });
  };

  const openUpdateTeam = async (id, e) => {
    await api
      .get("/teams/" + id.toString())
      .then((res) => {
        setName(res.data.team_name);
        setLogo(res.data.team_logo)
        setPoint(res.data.team_point);
        setTeamId(res.data._id);
      })
      .then(handleShow());
    console.log(id);
  };

  const updateTeam = async (id) => {
    await api.put("/teams/" + id.toString(), {
      team_name: name,
      team_logo: logo,
      team_point: point,
    });
    handleClose();
    getTeams();
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div>
      {props.isAdmin && (
        <div className="admin-team-table">
          <Table variant="dark" responsive striped hover>
            <thead>
              <tr>
                <th>Pozisyon</th>
                <th>Takım</th>
                <th>Puan</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {teams &&
                teams
                  .sort((a, b) =>
                    parseInt(a.team_point) < parseInt(b.team_point) ? 1 : -1
                  )
                  .map((data, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <th>
                        <img
                          src={require("../../assets/images/logos/" +
                            data.team_logo)}
                          alt="teamlogo"
                          width={30}
                        />
                        {" " + data.team_name}
                      </th>
                      <th>{data.team_point}</th>
                      <th>
                        <Button variant="light" onClick={(e) => openUpdateTeam(data._id,e)}>Düzenle</Button>
                      </th>
                    </tr>
                  ))}
            </tbody>
          </Table>
          <div className="modal-container">
            <Modal centered show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Takımı Puanını Güncelle</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div className="modal-label">
                    <label>Puan</label>

                    <input
                      placeholder="Puanı"
                      type="text"
                      name="point"
                      value={point}
                      onChange={(e) => setPoint(e.target.value)}
                      autoFocus
                    />
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Kapat
                </Button>
                <Button
                  variant="primary"
                  onClick={(e) => updateTeam(teamId, e)}
                >
                  Kaydet
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      )}
      {!props.isAdmin && (
        <div className="normal-team-table">
          <Table variant="dark" responsive striped hover>
            <thead>
              <tr>
                <th>Pozisyon</th>
                <th>Takım</th>
                <th>Puan</th>
              </tr>
            </thead>
            <tbody>
              {teams &&
                teams
                  .sort((a, b) =>
                    parseInt(a.team_point) < parseInt(b.team_point) ? 1 : -1
                  )
                  .map((data, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <th>
                        <img
                          src={require("../../assets/images/logos/" +
                            data.team_logo)}
                          alt="teamlogo"
                          width={30}
                        />
                        {" " + data.team_name}
                      </th>
                      <th>{data.team_point}</th>
                    </tr>
                  ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default TeamTable;
