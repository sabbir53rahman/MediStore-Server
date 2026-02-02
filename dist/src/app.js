import express from "express";
import { medicineRouter } from "./modules/medicine/medicine.router";
import { categoryRouter } from "./modules/category/category.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
import { orderRouter } from "./modules/order/order.router";
import { reviewRouter } from "./modules/review/review.router";
import { cartRouter } from "./modules/cart/cart.router";
import { userRouter } from "./modules/user/user.router";
const app = express();
app.use(cors({
    origin: process.env.APP_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "Accept",
    ],
}));
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());
app.use("/api/medicines", medicineRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/orders", orderRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/cart", cartRouter);
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
    res.send("Hello, from medistore");
});
export default app;
//# sourceMappingURL=app.js.map