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

const getAllMedicines = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await medicineService.getAllMedicines(req.query);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getMedicineById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await medicineService.getMedicineById(
      req.params.id as string,
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateMedicine = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await medicineService.updateMedicine(
      req.params.id as string,
      req.body,
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteMedicine = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await medicineService.deleteMedicine(req.params.id as string);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const medicineController = {
  createMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
};
