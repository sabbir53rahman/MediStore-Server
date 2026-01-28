import express, { Router } from "express";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
import { cartController } from "./cart.controller";

const router = express.Router();

router.get("/", auth(Role.CUSTOMER), cartController.getMyCart);

router.post("/items", auth(Role.CUSTOMER), cartController.addToCart);

router.patch(
  "/items/:itemId",
  auth(Role.CUSTOMER),
  cartController.updateQuantity,
);

router.delete(
  "/items/:itemId",
  auth(Role.CUSTOMER),
  cartController.removeFromCart,
);

export const cartRouter: Router = router;
