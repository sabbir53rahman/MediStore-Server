import { NextFunction, Request, Response } from "express";
export declare const orderController: {
    createOrder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getMyOrders: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getOrderById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getSellerOrders: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateOrderStatus: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=order.controller.d.ts.map