import express, { Router } from "express";
import { reviewController } from "./review.controller";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = express.Router();

router.post("/:medicineId", auth(Role.CUSTOMER), reviewController.createReview);

router.get("/medicine/:medicineId", reviewController.getReviewsByMedicine);

router.get("/", auth(Role.ADMIN), reviewController.getAllReviews);

router.put("/update/:id", auth(Role.CUSTOMER), reviewController.updateReview);

router.delete("/:id", auth(Role.CUSTOMER), reviewController.deleteReview);

export const reviewRouter: Router = router;
