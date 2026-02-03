import { prisma } from "../../lib/prisma";
import { OrderStatus } from "../../../generated/prisma/enums";

const createOrder = async (userId: string) => {
  const cart = await prisma.cart.findUnique({
    where: { userId },
    include: {
      items: {
        include: {
          medicine: true,
        },
      },
    },
  });

  if (!cart || cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  let totalAmount = 0;

  const orderItems = cart.items.map((item) => {
    totalAmount += item.quantity * item.medicine.price;

    return {
      medicineId: item.medicineId,
      quantity: item.quantity,
      price: item.medicine.price,
    };
  });

  const order = await prisma.order.create({
    data: {
      userId,
      address: "DEFAULT_ADDRESS",
      totalAmount,
      items: {
        create: orderItems,
      },
    },
    include: {
      items: true,
    },
  });

  await prisma.cartItem.deleteMany({
    where: { cartId: cart.id },
  });

  return order;
};

const getAllOrders = async () => {
  return prisma.order.findMany({
    include: {
      user: true,
      items: {
        include: {
          medicine: {
            include: {
              seller: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
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
  getAllOrders,
  getMyOrders,
  getOrderById,
  getSellerOrders,
  updateOrderStatus,
};
