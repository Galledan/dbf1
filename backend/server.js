const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const driversRouter = require("./routes/drivers");
const teamsRouter = require("./routes/teams");
const adminsRouter = require("./routes/admins");

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const conn = mongoose.connection;

conn.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(cors());
app.use(express.json());

app.use("/drivers", driversRouter);
app.use("/teams", teamsRouter);
app.use("/admins", adminsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to Damalı Bayrak F1 League API");
});
