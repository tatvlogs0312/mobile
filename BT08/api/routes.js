"use strict";
module.exports = function (app) {
  let productsCtrl = require("./controllers/ProductController");

  // todoList Routes
  app.route("/products").get(productsCtrl.get).post(productsCtrl.store);

  app
    .route("/products/:productId")
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);
};
