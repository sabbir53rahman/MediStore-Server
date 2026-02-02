export declare const reviewService: {
    createReview: (userId: string, medicineId: string, payload: {
        rating: number;
        comment?: string;
    }) => Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        medicineId: string;
        rating: number;
        comment: string | null;
    }>;
    updateReview: (reviewId: string, userId: string, payload: {
        rating?: number;
        comment?: string;
    }) => Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        medicineId: string;
        rating: number;
        comment: string | null;
    }>;
    deleteReview: (reviewId: string, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        medicineId: string;
        rating: number;
        comment: string | null;
    }>;
};
//# sourceMappingURL=review.service.d.ts.map