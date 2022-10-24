import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

import { PostgresCateRepo } from "../modules/cars/repositories/PostgresCateRepo";

const categoriesRoutes = Router();
const categoriesRepository = new PostgresCateRepo();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

// This route I created by willingly
categoriesRoutes.get("/", (request, response) => {

    return response.status(200).json(categoriesRepository.list());
});

export { categoriesRoutes };