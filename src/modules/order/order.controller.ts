import { NextFunction, Request, Response } from "express";
import { orderService } from "./order.service";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user!;
    const result = await orderService.createOrder(user.id, req.body);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getMyOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user!;
    const result = await orderService.getMyOrders(user.id);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user!;
    const result = await orderService.getOrderById(
      req.params.id as string,
      user.id,
    );

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getSellerOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const sellerId = req.user!.id;
    const result = await orderService.getSellerOrders(sellerId);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateOrderStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await orderService.updateOrderStatus(
      req.params.id as string,
      req.body.status,
    );

    res.status(200).json(result);
  } catch (error) {
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
