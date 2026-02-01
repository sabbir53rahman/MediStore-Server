import express, { Router } from "express";
import { UserController } from "./user.controller";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = express.Router();

router.get("/", auth(Role.ADMIN), UserController.getAllUser);

router.get("/:userId", auth(Role.ADMIN), UserController.getUserById);

router.put(
  "/update-profile/:userId",
  auth(Role.ADMIN, Role.CUSTOMER, Role.SELLER),
  UserController.updateMyProfile,
);

router.put(
  "/admin/update/:userId",
  auth(Role.ADMIN),
  UserController.adminUpdateUser,
);

router.delete("/:userId", auth(Role.ADMIN), UserController.deleteUser);

export const userRouter: Router = router;
