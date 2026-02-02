import express from "express";
import { categoryController } from "./category.controller";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
const router = express.Router();
router.post("/", auth(Role.ADMIN), categoryController.createCategory);
router.get("/", categoryController.getAllCategories);
export const categoryRouter = router;
//# sourceMappingURL=category.router.js.map