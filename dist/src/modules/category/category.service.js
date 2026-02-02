import { prisma } from "../../lib/prisma";
const createCategory = async (data) => {
    const result = await prisma.category.create({
        data,
    });
    return result;
};
const getAllCategories = async () => {
    const result = await prisma.category.findMany();
    return result;
};
export const categoryService = {
    createCategory,
    getAllCategories,
};
//# sourceMappingURL=category.service.js.map