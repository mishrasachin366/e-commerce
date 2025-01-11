const express = require("express");
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", authController.authenticate, orderController.getAll);
router.get("/:id", authController.authenticate, orderController.getById);
router.post("/", authController.authenticate, orderController.create);
router.put("/:id", authController.authenticate, orderController.update);
router.delete("/:id", authController.authenticate, orderController.delete);

module.exports = router;
