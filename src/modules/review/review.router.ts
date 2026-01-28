import express, { Router } from "express";
import { reviewController } from "./review.controller";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = express.Router();

router.post("/:medicineId", auth(Role.CUSTOMER), reviewController.createReview);

router.put("/:id", auth(Role.CUSTOMER), reviewController.updateReview);

router.delete("/:id", auth(Role.CUSTOMER), reviewController.deleteReview);

export const reviewRouter: Router = router;
