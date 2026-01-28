import express, { Application } from "express";
import { medicineRouter } from "./modules/medicine/medicine.router";
import { categoryRouter } from "./modules/category/category.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
import { orderRouter } from "./modules/order/order.router";
import { reviewRouter } from "./modules/review/review.router";
import { cartRouter } from "./modules/cart/cart.router";

const app: Application = express();

app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:4000",
    credentials: true,
  }),
);

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.use("/api/medicines", medicineRouter);

app.use("/api/categories", categoryRouter);

app.use("/api/orders", orderRouter);

app.use("/api/reviews", reviewRouter);

app.use("/api/carts", cartRouter);

app.get("/", (req, res) => {
  res.send("Hello, from medistore");
});

export default app;
