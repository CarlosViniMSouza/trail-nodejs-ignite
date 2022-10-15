import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const categoryAlreadyExists = categoriesRepository.findCategoryByName(name);

    if (categoryAlreadyExists) {
        return response.status(400).json({ error: "Category Already Exists" });
    }

    categoriesRepository.create({ name, description })

    return response.status(201).send();
});

// This route I created by willingly
categoriesRoutes.get("/", (request, response) => {

    return response.status(200).json(categoriesRepository.list());
});

export { categoriesRoutes };