import express, { Router } from "express";
import { categoryController } from "./category.controller";

const router = express.Router();

// POST /api/categories
router.post("/", categoryController.createCategory);

// GET /api/categories
// router.get("/", categoryController.getCategories);

export const categoryRouter: Router = router;
