export declare const cartService: {
    getOrCreateCart: (userId: string) => Promise<{
        items: ({
            medicine: {
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
            };
        } & {
            id: string;
            cartId: string;
            medicineId: string;
            quantity: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    addToCart: (userId: string, medicineId: string, quantity: number) => Promise<{
        items: ({
            medicine: {
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
            };
        } & {
            id: string;
            cartId: string;
            medicineId: string;
            quantity: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    updateQuantity: (userId: string, itemId: string, quantity: number) => Promise<{
        id: string;
        cartId: string;
        medicineId: string;
        quantity: number;
    }>;
    removeFromCart: (userId: string, itemId: string) => Promise<void>;
};
//# sourceMappingURL=cart.service.d.ts.map