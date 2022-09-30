const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const users = [];

// Middleware
function checksExistsUserAccount(request, response, next) {
  const { name } = request.headers;
  const user = users.find((user) => user.name === name)

  if (!user) {
    return response.status(400).json({ error: "User not found" });
  }

  request.user = user;

  return next();
};

// function for give welcome to user! ✌️🤓
app.get("/", (request, response) => {
  return response.json({ message: "Hello for you! 🖖" });
})

app.post('/users', (request, response) => {
  const { username, name } = request.body;
  const userExists = users.some((user) => user.name === name);

  if (userExists) {
    return response.status(400).json({ error: "User already exists!" });
  }

  users.push({
    id: uuidv4(),
    name,
    username,
    todos: []
  });

  return response.status(201).send();
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;