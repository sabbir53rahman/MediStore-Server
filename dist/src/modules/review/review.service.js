import { prisma } from "../../lib/prisma";
const createReview = async (userId, medicineId, payload) => {
    const { rating, comment } = payload;
    if (rating < 1 || rating > 5) {
        throw new Error("Rating must be between 1 and 5");
    }
    const purchased = await prisma.orderItem.findFirst({
        where: {
            medicineId,
            order: {
                userId,
            },
        },
    });
    if (!purchased) {
        throw new Error("You must purchase this medicine before reviewing");
    }
    const existingReview = await prisma.review.findFirst({
        where: {
            userId,
            medicineId,
        },
    });
    if (existingReview) {
        throw new Error("You already reviewed this medicine");
    }
    return prisma.review.create({
        data: {
            userId,
            medicineId,
            rating,
            comment: comment || null,
        },
    });
};
const updateReview = async (reviewId, userId, payload) => {
    const review = await prisma.review.findUnique({
        where: { id: reviewId },
    });
    if (!review || review.userId !== userId) {
        throw new Error("Review not found or unauthorized");
    }
    return prisma.review.update({
        where: { id: reviewId },
        data: payload,
    });
};
const deleteReview = async (reviewId, userId) => {
    const review = await prisma.review.findUnique({
        where: { id: reviewId },
    });
    if (!review || review.userId !== userId) {
        throw new Error("Review not found or unauthorized");
    }
    return prisma.review.delete({
        where: { id: reviewId },
    });
};
export const reviewService = {
    createReview,
    updateReview,
    deleteReview,
};
//# sourceMappingURL=review.service.js.map