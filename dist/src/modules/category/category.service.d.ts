import { Category } from "../../../generated/prisma/client";
export declare const categoryService: {
    createCategory: (data: Omit<Category, "id" | "createdAt">) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
    }>;
    getAllCategories: () => Promise<{
        name: string;
        id: string;
        createdAt: Date;
    }[]>;
};
//# sourceMappingURL=category.service.d.ts.map