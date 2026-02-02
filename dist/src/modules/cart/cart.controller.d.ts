import { NextFunction, Request, Response } from "express";
export declare const cartController: {
    getMyCart: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    addToCart: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateQuantity: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    removeFromCart: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=cart.controller.d.ts.map