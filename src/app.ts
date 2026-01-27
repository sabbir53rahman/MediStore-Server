import express, { Application } from "express";
import { medicineRouter } from "./modules/medicine/medicine.router";
import { categoryRouter } from "./modules/category/category.router";

const app: Application = express();

app.use(express.json());

app.use("/api/medicines", medicineRouter);

app.use("/api/categories", categoryRouter);

app.get("/", (req, res) => {
  res.send("Hello, from medistore");
});

export default app;
