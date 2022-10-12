import express, { response } from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: 'Hello Express + TS' });
});

app.listen(3030);