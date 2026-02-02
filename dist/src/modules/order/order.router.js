import express from "express";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
import { orderController } from "./order.controller";
const router = express.Router();
router.post("/", auth(Role.CUSTOMER), orderController.createOrder);
router.get("/my-orders", auth(Role.CUSTOMER), orderController.getMyOrders);
router.get("/:id", auth(Role.CUSTOMER), orderController.getOrderById);
router.get("/seller/all", auth(Role.SELLER), orderController.getSellerOrders);
router.patch("/seller/:id", auth(Role.SELLER), orderController.updateOrderStatus);
export const orderRouter = router;
//# sourceMappingURL=order.router.js.map