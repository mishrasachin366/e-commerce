const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

// Register a new user
router.post("/register", authController.register);

// Login a user
router.post("/login", authController.login);

router.get("/", authController.authenticate, userController.getAllUsers);
router.get("/:id", authController.authenticate, userController.getUserById);
router.put("/:id", authController.authenticate, userController.updateUser);
router.delete("/:id", authController.authenticate, userController.deleteUser);

module.exports = router;
