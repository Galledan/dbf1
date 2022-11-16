const express = require("express");
const Driver = require("../models/Driver")
const router = express.Router();

router.get("/", (req, res) => {
    Driver.find()
      .then((drivers) => {
        res.json(drivers);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  router.get("/:id", (req, res) => {
    Driver.findById(req.params.id)
      .then((driver) => {
        res.json(driver);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  router.post("/", async (req, res) => {
    const driver = new Driver({
      driver_name: req.body.driver_name,
      driver_team: req.body.driver_team,
      driver_number: req.body.driver_number,
      driver_point: req.body.driver_point,
    });
    try {
        const newDriver = await driver.save()
        res.status(201).json(newDriver)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
  });
  
  router.put("/:id", (req, res) => {
    Driver.findByIdAndUpdate(req.params.id, {
        driver_name: req.body.driver_name,
        driver_team: req.body.driver_team,
        driver_number: req.body.driver_number,
        driver_point: req.body.driver_point,
    })
      .then((driver) => {
        res.json(driver);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  router.delete("/:id", (req, res) => {
    Driver.findByIdAndDelete(req.params.id)
      .then((driver) => {
        res.json(driver);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  module.exports = router;