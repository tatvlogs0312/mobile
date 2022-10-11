"use strict";
module.exports = function (app) {
  let productsCtrl = require("./controllers/ProductController");
  let userCtrl = require("./controllers/UserController");

  // todoList Routes
  app.route("/products").get(productsCtrl.get).post(productsCtrl.store);

  app.route("/products/price/asc").get(productsCtrl.sortByPriceAsc);

  app.route("/products/price/desc").get(productsCtrl.sortByPriceDesc);

  app.route("/products/getType").get(productsCtrl.getDanhMuc);

  app.route("/products/danhmuc/:danhmuc").get(productsCtrl.getByDanhMuc);

  app
    .route("/products/:productId")
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);

  app.route("/user/login").post(userCtrl.login);
  
  app.route("/user/register").post(userCtrl.register);
  
};
