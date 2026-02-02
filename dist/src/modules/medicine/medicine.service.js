import { prisma } from "../../lib/prisma";
const createMedicine = async (data, userId) => {
    const result = prisma.medicine.create({
        data: {
            ...data,
            sellerId: userId,
        },
    });
    return result;
};
const getAllMedicines = async ({ search, categoryId, minPrice, maxPrice, page, limit, skip, sortBy, sortOrder, }) => {
    const andConditions = [];
    if (search) {
        andConditions.push({
            name: {
                contains: search,
                mode: "insensitive",
            },
        });
    }
    if (categoryId) {
        andConditions.push({
            categoryId,
        });
    }
    if (minPrice || maxPrice) {
        const priceCondition = {};
        if (minPrice) {
            priceCondition.gte = Number(minPrice);
        }
        if (maxPrice) {
            priceCondition.lte = Number(maxPrice);
        }
        andConditions.push({
            price: priceCondition,
        });
    }
    const where = andConditions.length > 0
        ? {
            AND: andConditions,
        }
        : {};
    const medicines = await prisma.medicine.findMany({
        take: limit,
        skip,
        where,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            category: true,
        },
    });
    const total = await prisma.medicine.count({
        where,
    });
    const totalPage = Math.ceil(total / limit);
    return {
        data: medicines,
        pagination: {
            total,
            page,
            limit,
            totalPage,
        },
    };
};
const getMedicineById = async (id) => {
    return prisma.medicine.findUnique({
        where: { id },
        include: {
            category: true,
        },
    });
};
const getMedicinesByCategory = async (categoryId) => {
    const medicines = await prisma.medicine.findMany({
        where: {
            categoryId,
        },
        include: {
            category: true,
        },
    });
    return medicines;
};
const updateMedicine = async (id, data, userId) => {
    const medicine = await prisma.medicine.findUnique({
        where: { id },
    });
    if (!medicine) {
        throw new Error("Medicine not found");
    }
    if (medicine.sellerId !== userId) {
        throw new Error("You are not allowed to update this medicine");
    }
    return prisma.medicine.update({
        where: { id },
        data,
    });
};
const deleteMedicine = async (id) => {
    return prisma.medicine.delete({
        where: { id },
    });
};
export const medicineService = {
    createMedicine,
    getAllMedicines,
    getMedicineById,
    getMedicinesByCategory,
    updateMedicine,
    deleteMedicine,
};
//# sourceMappingURL=medicine.service.js.map