import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const categoriesRoutes = Router();
const categories = [];

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const category = {
        id: uuidv4(),
        name,
        description
    };

    categories.push(category);

    return response.status(201).send();
});

// This route I created by willingly
categoriesRoutes.get("/", (request, response) => {

    return response.status(200).json(categories);
});

export { categoriesRoutes };