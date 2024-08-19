import express from "express";
import {
  deleteUser,
  getAllUser,
  getUserById,
  loginController,
  registerController,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/user", getAllUser);
router.get("/user/:id", getUserById);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);
router.post("/user/register", registerController);
router.post("/user/login", loginController);

export default router;
