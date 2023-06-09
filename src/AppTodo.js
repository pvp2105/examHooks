import React, { useState } from "react";
import "./App.scss";
import { TodoList, Content } from "./component/todoList_useState";
import TodoForm from "./component/todoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Fe" },
    { id: 2, title: "I love Be" },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValue) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>Welcome</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <Content />
    </div>
  );
}

export default App;
