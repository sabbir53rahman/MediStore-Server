import { NextFunction, Request, Response } from "express";
export declare const medicineController: {
    createMedicine: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getAllMedicines: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getMedicineById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getMedicinesByCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateMedicine: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteMedicine: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=medicine.controller.d.ts.map