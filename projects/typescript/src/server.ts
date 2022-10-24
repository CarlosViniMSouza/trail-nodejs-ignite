import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.get("/", (request, response) => {
    return response.json({ message: "Project Started" })
});

app.listen(3030, () => console.log("Server is Up!"));
