const express = require("express");
const wishlistController = require("../controllers/wishlistController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", authController.authenticate, wishlistController.getAll);
router.get(
  "/user/:userId",
  authController.authenticate,
  wishlistController.getByUserId
);
router.post("/", authController.authenticate, wishlistController.create);
router.delete("/:id", authController.authenticate, wishlistController.delete);

module.exports = router;
