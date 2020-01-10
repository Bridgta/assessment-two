var express = require("express");
var router = express.Router();
var todos = require("../data/todo");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "To Do List", todos });
});

router.post("/", (req, res, next) => {
  let newTodo = {
    todo: req.body.todo,
    done: false
  };
  todos.push(newTodo);
  console.log(todos);
  res.render("index", { title: "To Do List", todos });
});

module.exports = router;
