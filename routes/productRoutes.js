const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authController = require("../controllers/authController");

router.get("/", authController.authenticate, productController.getAll);
router.get("/:id", authController.authenticate, productController.getById);
router.post("/", authController.authenticate, productController.create);
router.put("/:id", authController.authenticate, productController.update);
router.delete("/:id", authController.authenticate, productController.delete);

module.exports = router;
