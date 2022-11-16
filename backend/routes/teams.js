const express = require("express");
const Team = require("../models/Team")
const router = express.Router();

router.get("/", (req, res) => {
    Team.find()
      .then((teams) => {
        res.json(teams);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  router.get("/:id", (req, res) => {
    Team.findById(req.params.id)
      .then((team) => {
        res.json(team);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  router.post("/", async (req, res) => {
    const team = new Team({
        team_name: req.body.team_name,
        team_logo: req.body.team_logo,
        team_point: req.body.team_point,
    });
    try {
        const newTeam = await team.save()
        res.status(201).json(newTeam)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
  });
  
  router.put("/:id", (req, res) => {
    Team.findByIdAndUpdate(req.params.id, {
        team_name: req.body.team_name,
        team_logo: req.body.team_logo,
        team_point: req.body.team_point,
    })
      .then((team) => {
        res.json(team);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  router.delete("/:id", (req, res) => {
    Team.findByIdAndDelete(req.params.id)
      .then((team) => {
        res.json(team);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  module.exports = router;