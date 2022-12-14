"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("./../db");

module.exports = {
  get: (req, res) => {
    let sql = `SELECT * FROM products LIMIT 6 OFFSET ${req.query.offset}`;
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  detail: (req, res) => {
    let sql = "SELECT * FROM products WHERE id = ?";
    db.query(sql, [req.params.productId], (err, response) => {
      if (err) throw err;
      res.json(response[0]);
    });
  },
  update: (req, res) => {
    let data = req.body;
    let productId = req.params.productId;
    let sql = "UPDATE products SET ? WHERE id = ?";
    db.query(sql, [data, productId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Update success!" });
    });
  },
  store: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO products SET ?";
    db.query(sql, [data], (err, response) => {
      if (err) throw err;
      res.json({ message: "Insert success!" });
    });
  },
  delete: (req, res) => {
    let sql = "DELETE FROM products WHERE id = ?";
    db.query(sql, [req.params.productId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Delete success!" });
    });
  },

  sortByPriceAsc: (req, res) => {
    let sql = "SELECT * FROM `products` GROUP BY price ASC";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },

  sortByPriceDesc: (req, res) => {
    let sql = "SELECT * FROM `products` GROUP BY price DESC";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },

  getByDanhMuc: (req, res) => {
    console.log(req.query.offset);
    console.log(req.query.danhmuc);

    let sql = `SELECT * FROM products WHERE danhmuc = '${req.params.danhmuc}' LIMIT 6 OFFSET ${req.query.offset}`;
    db.query(sql, [req.params.danhmuc], (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },

  getDanhMuc : (req,res) => {
    let sql = "SELECT DISTINCT danhmuc FROM products";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  }
};
