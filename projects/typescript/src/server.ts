import express from 'express';
// import { createCourse } from './routes';

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    return response.json({ message: "Project Started" })
});

app.post("/logCourses", (request, response) => {
    const { name } = request.body;

    return response.json({ nameOfCourse: name })
});

app.listen(3030, () => console.log("Server is Up!"));
