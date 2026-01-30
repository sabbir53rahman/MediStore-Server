import { Medicine } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createMedicine = async (
  data: Omit<Medicine, "id" | "createdAt" | "updatedAt" | "sellerId">,
  userId: string,
) => {
  const result = prisma.medicine.create({
    data: {
      ...data,
      sellerId: userId,
    },
  });
  return result;
};

const getAllMedicines = async (filters: any) => {
  const { search, categoryId, minPrice, maxPrice } = filters;

  const where: any = {};

  if (search) {
    where.name = {
      contains: search,
      mode: "insensitive",
    };
  }

  if (categoryId) {
    where.categoryId = categoryId;
  }

  if (minPrice || maxPrice) {
    where.price = {};

    if (minPrice) {
      where.price.gte = Number(minPrice);
    }

    if (maxPrice) {
      where.price.lte = Number(maxPrice);
    }
  }

  return prisma.medicine.findMany({
    where,
    include: {
      category: true,
    },
  });
};

const getMedicineById = async (id: string) => {
  return prisma.medicine.findUnique({
    where: { id },
    include: {
      category: true,
    },
  });
};

const updateMedicine = async (
  id: string,
  data: Partial<Medicine>,
  userId: string,
) => {
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

const deleteMedicine = async (id: string) => {
  return prisma.medicine.delete({
    where: { id },
  });
};

export const medicineService = {
  createMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
};
