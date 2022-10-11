"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("./../db");

module.exports = {
  login: (req, res) => {
    let data = req.body;
    let sql = "SELECT * FROM user WHERE email = ? and password = ?";
    db.query(sql, [data.email, data.password], (err, response) => {
      if (err) throw err;
      res.json(response[0]);
    });
  },

  register: (req, res) => {
    console.log("aaa");
    let data = req.body;
    let sql =
      "INSERT INTO `user`(`name`, `phone_number`, `email`, `password`) VALUES (?,?,?,?)";
    db.query(sql, [data.name,data.phone_number,data.email,data.password], (err, response) => {
      if (err) throw res.json(err);
      res.json({ message: "Insert success!" });
    });
  },
};
