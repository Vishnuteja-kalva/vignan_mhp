const {addToCart, removeFromCart, getCart} = require("../controllers/cartController");
const authMiddleware = require("../middleware/auth");
const express = require("express");
const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware, addToCart);
cartRouter.post("/remove",authMiddleware, removeFromCart);
cartRouter.post("/get",authMiddleware, getCart);

module.exports = cartRouter;
