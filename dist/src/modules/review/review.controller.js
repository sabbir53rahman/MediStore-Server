import { reviewService } from "./review.service";
const createReview = async (req, res, next) => {
    try {
        const user = req.user;
        const medicineId = req.params.medicineId;
        const result = await reviewService.createReview(user.id, medicineId, req.body);
        res.status(201).json({
            success: true,
            message: "Review created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateReview = async (req, res, next) => {
    try {
        const user = req.user;
        const reviewId = req.params.id;
        const result = await reviewService.updateReview(reviewId, user.id, req.body);
        res.status(200).json({
            success: true,
            message: "Review updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const deleteReview = async (req, res, next) => {
    try {
        const user = req.user;
        const reviewId = req.params.id;
        await reviewService.deleteReview(reviewId, user.id);
        res.status(200).json({
            success: true,
            message: "Review deleted successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
export const reviewController = {
    createReview,
    updateReview,
    deleteReview,
};
//# sourceMappingURL=review.controller.js.map