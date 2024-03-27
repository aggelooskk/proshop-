import Express from "express";
const router = Express.Router();
import {
  authUser,
  registerUser,
  logoutrUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";

router.route("/").post(register).get(getUsers); // Admin
router.post("/logout", logoutrUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

export default router;
