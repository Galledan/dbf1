import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import api from "../../data/api";

function DriverTable(props) {
  const [drivers, setDrivers] = useState();

  const [name, setName] = useState();
  const [team, setTeam] = useState();
  const [number, setNumber] = useState();
  const [point, setPoint] = useState();
  const [driverId, setDriverId] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getDrivers = async () => {
    await api.get("/drivers").then((res) => {
      setDrivers(res.data);
    });
  };

  const deleteDriver = async (id, e) => {
    await api.delete("/drivers/" + id.toString());
    getDrivers();
  };

  const openUpdateDriver = async (id, e) => {
    await api
      .get("/drivers/" + id.toString())
      .then((res) => {
        setName(res.data.driver_name);
        setTeam(res.data.driver_team);
        setNumber(res.data.driver_number);
        setPoint(res.data.driver_point);
        setDriverId(res.data._id);
      })
      .then(handleShow());
    console.log(id);
  };

  const updateDriver = async (id) => {
    await api.put("/drivers/" + id.toString(), {
      driver_name: name,
      driver_team: team,
      driver_number: number,
      driver_point: point,
    });
    handleClose();
    getDrivers();
  };

  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <div>
      {props.isAdmin && (
        <div className="admin-driver-table">
          <Table size="sm" variant="dark" responsive striped hover>
            <thead>
              <tr>
                <th>Pozisyon</th>
                <th>Numara</th>
                <th>İsim</th>
                <th>Takım</th>
                <th>Puan</th>
                <th />
              </tr>
            </thead>
            <tbody>
            {drivers &&
                drivers
                  .sort((a, b) => {
                    if (a.driver_point !== b.driver_point){
                      return parseInt(a.driver_point) < parseInt(b.driver_point)
                        ? 1
                        : -1;
                    }
                    else {return a.driver_number > b.driver_number ? 1 : -1;}
                  })
                  .map((data, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <th>{data.driver_number}</th>
                      <th>{data.driver_name}</th>
                      <th>{data.driver_team}</th>
                      <th>{data.driver_point}</th>
                      <th>
                        <Button
                          variant="light"
                          onClick={(e) => openUpdateDriver(data._id, e)}
                        >
                          Düzenle
                        </Button>{" "}
                        <Button
                          variant="light"
                          onClick={(e) => deleteDriver(data._id, e)}
                        >
                          Sil
                        </Button>
                      </th>
                    </tr>
                  ))}
            </tbody>
          </Table>

          <div className="modal-container">
            <Modal centered show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Sürücüyü Güncelle</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div className="modal-label">
                    <label>İsim-Soyisim</label>
                    <input
                      placeholder="Adı Soyadı"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="modal-label">
                    <label>Takım</label>

                    <input
                      placeholder="Takımı"
                      type="text"
                      name="team"
                      value={team}
                      onChange={(e) => setTeam(e.target.value)}
                    />
                  </div>
                  <div className="modal-label">
                    <label>Numara</label>
                    <input
                      placeholder="Yarış Numarası"
                      type="text"
                      name="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
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
                  onClick={(e) => updateDriver(driverId, e)}
                >
                  Kaydet
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      )}
      {!props.isAdmin && (
        <div className="normal-driver-table">
          <Table size="sm" variant="dark" responsive striped hover>
            <thead>
              <tr>
                <th>Pozisyon</th>
                <th>İsim</th>
                <th>Takım</th>
                <th>Puan</th>
              </tr>
            </thead>
            <tbody>
              {drivers &&
                drivers
                  .sort((a, b) => {
                    if (a.driver_point !== b.driver_point)
                      return parseInt(a.driver_point) < parseInt(b.driver_point)
                        ? 1
                        : -1;
                    else return a.driver_number > b.driver_number ? 1 : -1;
                  })
                  .map((data, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <th>{data.driver_name}</th>
                      <th>{data.driver_team}</th>
                      <th>{data.driver_point}</th>
                    </tr>
                  ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default DriverTable;
