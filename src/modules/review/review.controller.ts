import { NextFunction, Request, Response } from "express";
import { reviewService } from "./review.service";

/* CREATE */
const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user!;
    const medicineId = req.params.medicineId as string;

    const result = await reviewService.createReview(
      user.id,
      medicineId,
      req.body,
    );

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* ✅ GET REVIEWS BY MEDICINE */
const getReviewsByMedicine = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const medicineId = req.params.medicineId as string;

    const result = await reviewService.getReviewsByMedicine(medicineId);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* (Optional) ADMIN: GET ALL REVIEWS */
const getAllReviews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await reviewService.getAllReviews();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* UPDATE */
const updateReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user!;
    const reviewId = req.params.id as string;

    const result = await reviewService.updateReview(
      reviewId,
      user.id,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* DELETE */
const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user!;
    const reviewId = req.params.id as string;

    await reviewService.deleteReview(reviewId, user.id);

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const reviewController = {
  createReview,
  getReviewsByMedicine,
  getAllReviews,
  updateReview,
  deleteReview,
};
