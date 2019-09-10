const express = require("express");
const app = express.Router();
const db = require("../data/dbConfig");

//! CREATE
//* Create a new car
app.post("/", (req, res) => {
  try {
    db("cars")
      .insert(req.body)
      .then(response => {
        res
          .status(201)
          .json(`Entry successfully created with the id of ${response}`);
      });
  } catch (err) {
    res.status(500).json({ message: "Issue creating data" });
  }
});
//! READ
//* Read all cars
app.get("/", (req, res) => {
  try {
    db("cars").then(response => {
      res.status(200).json(response);
    });
  } catch (err) {
    res.status(500).json({ message: "Issue reading data" });
  }
});
//* Read car by id
app.get("/:id", (req, res) => {
  try {
    db("cars")
      .where({ id: req.params.id })
      .then(response => {
        res.status(200).json(response);
      });
  } catch (err) {
    res.status(500).json({ message: "Issue reading data" });
  }
});
//! UPDATE
//* Update car by id
app.put("/:id", (req, res) => {
  try {
    db("cars")
      .where({ id: req.params.id })
      .update(req.body)
      .then(() => {
        res
          .status(200)
          .json(`Entry by the id of ${req.params.id} successfully updated`);
      });
  } catch (err) {
    res.status(500).json({ message: "Issue updating data" });
  }
});
//! DELETE
//* Delete car by id
app.delete("/:id", (req, res) => {
  try {
    db("cars")
      .where({ id: req.params.id })
      .del()
      .then(() => {
        res
          .status(200)
          .json(`Entry by the id of ${req.params.id} successfully deleted`);
      });
  } catch (err) {
    res.status(500).json({ message: "Issue deleting data" });
  }
});

module.exports = app;
