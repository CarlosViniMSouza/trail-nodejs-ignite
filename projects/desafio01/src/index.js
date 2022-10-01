const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const users = [];

// Middleware
function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;
  const user = users.find(user => user.username === username)

  if (!user) {
    return response.status(400).json({ error: "User not Found" });
  }

  request.user = user;

  return next();
};

app.post('/users', (request, response) => {
  const { username, name } = request.body;
  const userExists = users.find(user => user.username === username);

  if (userExists) {
    return response.status(400).json({ error: "Username already exists!" });
  }

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: []
  }

  users.push(user);

  return response.status(201).json(user);
});

// function extra for show our users
app.get('/users', checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body;
  const { user } = request;

  const todoCreation = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  };

  user.todos.push(todoCreation);

  return response.status(201).send();
});

app.get("/todos", checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user.todos);
})

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body;
  const { id } = request.params;
  const { user } = request;

  const todoNew = user.todos.find(todoNew => todoNew.id === id);

  if (!todoNew) {
    return response.status(404).json({ error: "Todo not Found!" });
  }

  todoNew.title = title;
  todoNew.deadline = new Date(deadline);

  return response.json(todoNew);
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { id } = request.params;
  const { user } = request;

  const todoNew = user.todos.find(todoNew => todoNew.id === id);

  if (!todoNew) {
    return response.status(404).json({ error: "Todo not Found!" });
  }

  todoNew.done = true;

  return response.json(todoNew);
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { id } = request.params;
  const { user } = request;

  const todoNew = user.todos.findIndex(todoNew => todoNew.id === id);

  if (todoNew === -1) {
    return response.status(404).json({ error: "Todo not Found!" });
  }

  user.todos.splice(todoNew, 1);

  return response.status(204).send();
});

module.exports = app;