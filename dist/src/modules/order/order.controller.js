import { orderService } from "./order.service";
const createOrder = async (req, res, next) => {
    try {
        const user = req.user;
        const result = await orderService.createOrder(user.id);
        res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getMyOrders = async (req, res, next) => {
    try {
        const user = req.user;
        console.log("User in getMyOrders:", req.user);
        const result = await orderService.getMyOrders(user.id);
        res.status(200).json({
            success: true,
            message: "Order received successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getOrderById = async (req, res, next) => {
    try {
        const user = req.user;
        const result = await orderService.getOrderById(req.params.id, user.id);
        res.status(200).json({
            success: true,
            message: "Order received successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getSellerOrders = async (req, res, next) => {
    try {
        const sellerId = req.user.id;
        const result = await orderService.getSellerOrders(sellerId);
        res.status(200).json({
            success: true,
            message: "Seller orders received successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateOrderStatus = async (req, res, next) => {
    try {
        const result = await orderService.updateOrderStatus(req.params.id, req.body.status);
        res.status(200).json({
            success: true,
            message: "Order status updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
export const orderController = {
    createOrder,
    getMyOrders,
    getOrderById,
    getSellerOrders,
    updateOrderStatus,
};
//# sourceMappingURL=order.controller.js.map