import { OrderStatus } from "../../../generated/prisma/enums";
export declare const orderService: {
    createOrder: (userId: string) => Promise<{
        items: {
            id: string;
            price: number;
            medicineId: string;
            quantity: number;
            orderId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        userId: string;
        address: string | null;
        totalAmount: number;
    }>;
    getMyOrders: (userId: string) => Promise<({
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
            price: number;
            medicineId: string;
            quantity: number;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        userId: string;
        address: string | null;
        totalAmount: number;
    })[]>;
    getOrderById: (orderId: string, userId: string) => Promise<({
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
            price: number;
            medicineId: string;
            quantity: number;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        userId: string;
        address: string | null;
        totalAmount: number;
    }) | null>;
    getSellerOrders: (sellerId: string) => Promise<({
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
            price: number;
            medicineId: string;
            quantity: number;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        userId: string;
        address: string | null;
        totalAmount: number;
    })[]>;
    updateOrderStatus: (orderId: string, status: OrderStatus) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        userId: string;
        address: string | null;
        totalAmount: number;
    }>;
};
//# sourceMappingURL=order.service.d.ts.map