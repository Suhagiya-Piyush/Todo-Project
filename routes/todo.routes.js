const express = require('express');
const { showTodos, addTodos, deleteTodo } = require('../controller/todo.controller');
const todoRoutes = express.Router();
const {isAuthenticate} = require('../helpers/verifyUser');

todoRoutes.get("/", isAuthenticate, showTodos);
todoRoutes.post("/",isAuthenticate, addTodos);
todoRoutes.get("/delete/:_id",isAuthenticate, deleteTodo);

module.exports = todoRoutes;