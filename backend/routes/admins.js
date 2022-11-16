const express = require("express");
const Admin = require("../models/Admin")
const router = express.Router();

router.get("/", (req, res) => {
    Admin.find()
      .then((admins) => {
        res.json(admins);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  router.get("/:id", (req, res) => {
    Admin.findById(req.params.id)
      .then((admin) => {
        res.json(admin);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  router.post("/", async (req, res) => {
    const admin = new Admin({
        admin_name: req.body.admin_name,
        admin_password: req.body.admin_password,
    });
    try {
        const newAdmin = await admin.save()
        res.status(201).json(newAdmin)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
  });
  
  router.put("/:id", (req, res) => {
    Admin.findByIdAndUpdate(req.params.id, {
        admin_name: req.body.admin_name,
        admin_password: req.body.admin_password,
    })
      .then((admin) => {
        res.json(admin);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  router.delete("/:id", (req, res) => {
    Admin.findByIdAndDelete(req.params.id)
      .then((admin) => {
        res.json(admin);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  module.exports = router;