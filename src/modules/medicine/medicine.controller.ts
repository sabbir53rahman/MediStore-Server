import { NextFunction, Request, Response } from "express";
import { medicineService } from "./medicine.service";

const createMedicine = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await medicineService.createMedicine(req.body);
    return res.status(201).json(result);
  } catch (error: any) {
    next(error);
  }
};

export const medicineController = {
  createMedicine,
};
