import express from "express";
import { medicineController } from "./medicine.controller";
import { Role } from "../../../generated/prisma/enums";
import auth from "../../middlewares/auth";
const router = express.Router();
router.post("/", auth(Role.SELLER), medicineController.createMedicine);
router.get("/", medicineController.getAllMedicines);
router.get("/:id", medicineController.getMedicineById);
router.get("/category-medicine/:categoryId", medicineController.getMedicinesByCategory);
router.put("/seller/:id", auth(Role.SELLER), medicineController.updateMedicine);
router.delete("/:id", auth(Role.SELLER), medicineController.deleteMedicine);
export const medicineRouter = router;
//# sourceMappingURL=medicine.router.js.map