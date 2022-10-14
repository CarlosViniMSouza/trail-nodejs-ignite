import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/getCategories", categoriesRoutes);

app.get("/", (request, response) => {
    return response.json({ message: "Project Started" })
});

app.listen(3030, () => console.log("Server is Up!"));
