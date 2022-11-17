import React from "react";
import { useState, useEffect } from "react";
import api from "../../data/api";
import NavBar from "../../components/NavBar/navbar";
import "./admin.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DriverTable from "../../components/Tables/DriverTable";
import TeamTable from "../../components/Tables/TeamTable";

function Admin() {
  const [drivers, setDrivers] = useState();

  const [name, setName] = useState();
  const [team, setTeam] = useState();
  const [number, setNumber] = useState();
  const [point, setPoint] = useState();

  const [teams, setTeams] = useState();

  const [isAdmin, setIsAdmin] = useState(false);
  const [admins, setAdmins] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [adminName, setAdminName] = useState();
  const [adminPassword, setAdminPassword] = useState();

  const onLogin = () => {
    if (
      admins.some(
        (a) => a.admin_name === username && a.admin_password === password
      ) === true
    )
      setIsAdmin(true);
    else console.log("invalid input");
  };

  const getAdmins = async () => {
    await api.get("/admins").then((res) => {
      setAdmins(res.data);
    });
  };

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

  const addAdmin = async () => {
    await api
      .post("/admins", {
        admin_name: adminName,
        admin_password: adminPassword,
      })
      .catch((err) => console.log(err));

    getAdmins();
  };

  const deleteAdmin = async (id, e) => {
    await api.delete("/admins/" + id.toString());
    getAdmins();
  };

  const addDriver = async () => {
    await api
      .post("/drivers", {
        driver_name: name,
        driver_team: team,
        driver_number: number,
        driver_point: point,
      })
      .catch((err) => console.log(err));
      console.log(drivers + teams);
    getDrivers();
  };

  useEffect(() => {
    getDrivers();
    getTeams();
    getAdmins();
  }, []);

  return (
    <div className="Admin">
      <NavBar />
      {!isAdmin && (
        <div className="admin-login">
          <img
            src={require("../../assets/images/logo.png")}
            alt="logo"
            width={300}
          />
          <h1>Admin Paneli</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Kullancı Adı</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Wrong inputs
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="light" onClick={onLogin}>
              Giriş
            </Button>
          </Form>
        </div>
      )}
      {isAdmin && (
        <div className="admin-container">
          <div className="lists">
            <div className="driver-list">
              <h3>Sürücü Tablosu</h3>
              <DriverTable isAdmin={true} />
              <div className="add-driver-container">
                <h1>Sürücü Ekle</h1>
                <form>
                  <input
                    placeholder="Adı Soyadı"
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <select
                    id="teams"
                    list="teams"
                    name="team"
                    onChange={(e) => setTeam(e.target.value)}
                  >
                    <option value="Mercedes-AMG Petronas">
                      Mercedes-AMG Petronas
                    </option>
                    <option value="ORACLE Red Bull Racing">
                      ORACLE Red Bull Racing
                    </option>
                    <option value="Scuderia Ferrari">Scuderia Ferrari</option>
                    <option value="McLaren">McLaren</option>
                    <option value="BWT Alpine">BWT Alpine</option>
                    <option value="Scuderia AlphaTauri">
                      Scuderia AlphaTauri
                    </option>
                    <option value="Aston Martin ARAMCO Cognizant">
                      Aston Martin ARAMCO Cognizant
                    </option>
                    <option value="Williams Racing">Williams Racing</option>
                    <option value="Alfa Romeo F1 Team ORLEN">
                      Alfa Romeo F1 Team ORLEN
                    </option>
                    <option value="Haas">Haas</option>
                  </select>
                  <input
                    placeholder="Yarış Numarası"
                    type="text"
                    name="number"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <input
                    placeholder="Puanı"
                    type="text"
                    name="point"
                    onChange={(e) => setPoint(e.target.value)}
                  />
                </form>
                <Button onClick={(e) => addDriver()}>Ekle</Button>
              </div>
            </div>
            <div className="team-list">
              <h3>Takım Tablosu</h3>
              <TeamTable isAdmin={true} />
            </div>
            <div className="admin-list">
              <h3>Adminler Listesi</h3>
              <Table size="sm" variant="dark" responsive striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Kullancı Adı</th>
                    <th>Şifre</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {admins &&
                    admins.map((a, i) => (
                      <tr key={i}>
                        <th>{i + 1}</th>
                        <th>{a.admin_name}</th>
                        <th>{a.admin_password}</th>
                        <th>
                          <Button
                            variant="light"
                            onClick={(e) => deleteAdmin(a._id, e)}
                          >
                            Sil
                          </Button>
                        </th>
                      </tr>
                    ))}
                </tbody>
              </Table>
              <div className="add-admin-container">
                <form>
                  <input
                    placeholder="Admin Adı"
                    type="text"
                    name="name"
                    onChange={(e) => setAdminName(e.target.value)}
                  />
                  <input
                    placeholder="Admin Şifresi"
                    type="text"
                    name="name"
                    onChange={(e) => setAdminPassword(e.target.value)}
                  />
                  <Button onClick={(e) => addAdmin()}>Admin Ekle</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
