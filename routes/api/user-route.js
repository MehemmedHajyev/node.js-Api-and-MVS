const userController = require("../../controllers/api/user-controller");

const express = require("express");
const authenticateUser = require("../../middlewares/auth");
const router = express.Router();

router.get("/getalluser", authenticateUser, userController.getAllUsers);
router.get("/getoneuser/:id", userController.getOneUser);
router.get(
  "/getoneuserbyactivestatus/:id",
  userController.getOneUserByActiveStatus
);
router.get("/getuserbyusername/:username", userController.getUserByUsername);
router.get("/getusersbyactivestatus", userController.getUsersByActiveStatus);
router.post("/", userController.addUser);

module.exports = router;
