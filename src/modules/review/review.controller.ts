import { NextFunction, Request, Response } from "express";
import { reviewService } from "./review.service";

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
  updateReview,
  deleteReview,
};
