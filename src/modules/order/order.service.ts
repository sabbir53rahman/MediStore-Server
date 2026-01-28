import { prisma } from "../../lib/prisma";
import { OrderStatus } from "../../../generated/prisma/enums";

const createOrder = async (userId: string, payload: any) => {
  const { items, address } = payload;

  let totalAmount = 0;

  const orderItemsData = await Promise.all(
    items.map(async (item: any) => {
      const medicine = await prisma.medicine.findUnique({
        where: { id: item.medicineId },
      });

      if (!medicine) {
        throw new Error("Medicine not found");
      }

      totalAmount += medicine.price * item.quantity;

      return {
        medicineId: medicine.id,
        quantity: item.quantity,
        price: medicine.price,
      };
    }),
  );

  return prisma.order.create({
    data: {
      userId,
      address,
      totalAmount,
      items: {
        create: orderItemsData,
      },
    },
    include: {
      items: {
        include: {
          medicine: true,
        },
      },
    },
  });
};

const getMyOrders = async (userId: string) => {
  return prisma.order.findMany({
    where: { userId },
    include: {
      items: {
        include: {
          medicine: true,
        },
      },
    },
  });
};

const getOrderById = async (orderId: string, userId: string) => {
  return prisma.order.findFirst({
    where: {
      id: orderId,
      userId,
    },
    include: {
      items: {
        include: {
          medicine: true,
        },
      },
    },
  });
};

const getSellerOrders = async (sellerId: string) => {
  return prisma.order.findMany({
    where: {
      items: {
        some: {
          medicine: {
            sellerId,
          },
        },
      },
    },
    include: {
      items: {
        include: {
          medicine: true,
        },
      },
    },
  });
};

const updateOrderStatus = async (orderId: string, status: OrderStatus) => {
  return prisma.order.update({
    where: { id: orderId },
    data: { status },
  });
};

export const orderService = {
  createOrder,
  getMyOrders,
  getOrderById,
  getSellerOrders,
  updateOrderStatus,
};
