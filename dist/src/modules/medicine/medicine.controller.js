import { medicineService } from "./medicine.service";
import paginationSortingHelper from "../../helpers/pageinationSorHelper";
const createMedicine = async (req, res, next) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(400).json({
                error: "Unsuthorized! ",
            });
        }
        const result = await medicineService.createMedicine(req.body, user.id);
        res.status(200).json({
            success: true,
            message: "Medicine created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getAllMedicines = async (req, res, next) => {
    try {
        const { search, categoryId, minPrice, maxPrice } = req.query;
        const searchString = typeof search === "string" ? search : undefined;
        const { page, limit, skip, sortBy, sortOrder } = paginationSortingHelper(req.query);
        const result = await medicineService.getAllMedicines({
            search: searchString,
            categoryId: categoryId,
            minPrice: minPrice,
            maxPrice: maxPrice,
            page,
            limit,
            skip,
            sortBy,
            sortOrder,
        });
        res.status(200).json({
            success: true,
            message: "Medicine received successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getMedicineById = async (req, res, next) => {
    try {
        const result = await medicineService.getMedicineById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Medicine received successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getMedicinesByCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const medicines = await medicineService.getMedicinesByCategory(categoryId);
        res.status(200).json({
            success: true,
            message: "Medicines received successfully",
            data: medicines,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateMedicine = async (req, res, next) => {
    try {
        const userId = req.user?.id;
        const result = await medicineService.updateMedicine(req.params.id, req.body, userId);
        res.status(200).json({
            success: true,
            message: "Medicine updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const deleteMedicine = async (req, res, next) => {
    try {
        const { id } = req.params;
        await medicineService.deleteMedicine(id);
        return res.status(200).json({
            success: true,
            message: "Medicine deleted successfully",
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
};
export const medicineController = {
    createMedicine,
    getAllMedicines,
    getMedicineById,
    getMedicinesByCategory,
    updateMedicine,
    deleteMedicine,
};
//# sourceMappingURL=medicine.controller.js.map