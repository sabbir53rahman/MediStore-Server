import { prisma } from "../../lib/prisma";
const getAllUsers = async ({ page, limit, skip, }) => {
    const andConditions = [];
    const allUser = await prisma.user.findMany({
        take: limit,
        skip,
        where: {
            AND: andConditions,
        },
    });
    const total = await prisma.user.count({
        where: {
            AND: andConditions,
        },
    });
    return {
        data: allUser,
        pagination: {
            total,
            page,
            limit,
            totalPage: Math.ceil(total / limit),
        },
    };
};
const getUserById = async (id) => {
    return prisma.user.findUnique({
        where: { id },
    });
};
export const updateProfile = async (userId, data) => {
    return prisma.user.update({
        where: { id: userId },
        data,
    });
};
export const adminUpdateUserStatus = async (userId, data) => {
    return prisma.user.update({
        where: { id: userId },
        data,
    });
};
const deleteUser = async (id) => {
    return prisma.user.delete({
        where: { id },
    });
};
export const userService = {
    getAllUsers,
    getUserById,
    updateProfile,
    adminUpdateUserStatus,
    deleteUser,
};
//# sourceMappingURL=user.service.js.map