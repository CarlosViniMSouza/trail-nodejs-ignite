import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

// This route I created by willingly
categoriesRoutes.get("/", (request, response) => {

    return response.status(200).json(categoriesRepository.list());
});

export { categoriesRoutes };