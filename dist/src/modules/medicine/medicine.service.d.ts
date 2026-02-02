import { Medicine } from "../../../generated/prisma/client";
export declare const medicineService: {
    createMedicine: (data: Omit<Medicine, "id" | "createdAt" | "updatedAt" | "sellerId">, userId: string) => Promise<{
        name: string;
        id: string;
        description: string;
        price: number;
        stock: number;
        isFeatured: boolean | null;
        imageUrl: string | null;
        sellerId: string;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllMedicines: ({ search, categoryId, minPrice, maxPrice, page, limit, skip, sortBy, sortOrder, }: {
        search?: string;
        categoryId?: string;
        minPrice?: string;
        maxPrice?: string;
        page: number;
        limit: number;
        skip: number;
        sortBy: string;
        sortOrder: string;
    }) => Promise<{
        data: ({
            category: {
                name: string;
                id: string;
                createdAt: Date;
            };
        } & {
            name: string;
            id: string;
            description: string;
            price: number;
            stock: number;
            isFeatured: boolean | null;
            imageUrl: string | null;
            sellerId: string;
            categoryId: string;
            createdAt: Date;
            updatedAt: Date;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPage: number;
        };
    }>;
    getMedicineById: (id: string) => Promise<({
        category: {
            name: string;
            id: string;
            createdAt: Date;
        };
    } & {
        name: string;
        id: string;
        description: string;
        price: number;
        stock: number;
        isFeatured: boolean | null;
        imageUrl: string | null;
        sellerId: string;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    getMedicinesByCategory: (categoryId: string) => Promise<({
        category: {
            name: string;
            id: string;
            createdAt: Date;
        };
    } & {
        name: string;
        id: string;
        description: string;
        price: number;
        stock: number;
        isFeatured: boolean | null;
        imageUrl: string | null;
        sellerId: string;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    updateMedicine: (id: string, data: Partial<Medicine>, userId: string) => Promise<{
        name: string;
        id: string;
        description: string;
        price: number;
        stock: number;
        isFeatured: boolean | null;
        imageUrl: string | null;
        sellerId: string;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteMedicine: (id: string) => Promise<{
        name: string;
        id: string;
        description: string;
        price: number;
        stock: number;
        isFeatured: boolean | null;
        imageUrl: string | null;
        sellerId: string;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=medicine.service.d.ts.map