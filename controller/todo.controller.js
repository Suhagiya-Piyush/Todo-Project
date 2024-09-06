const Todo = require('../model/todo.model');

exports.showTodos = async (req, res) => {
    try {
        const todos = await Todo.find({userId: req.user._id});
        // console.log(todos);
        res.render('todo.ejs', {todos});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Internal Server Error'});
    }
}

exports.addTodos = async (req, res) => {
    try {
        await Todo.create({...req.body, userId: req.user._id});
        res.redirect("/api/todo");
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Internal Server Error'});
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const {_id} = req.params;
        console.log(_id);
        await Todo.deleteOne({_id});
        res.redirect("/api/todo");
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Internal Server Error'});
    }
}