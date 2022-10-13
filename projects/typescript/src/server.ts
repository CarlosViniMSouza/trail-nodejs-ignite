import express from 'express';
// import { createCourse } from './routes';

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Project Started" })
});

app.listen(3030, () => console.log("Server is Up!"));