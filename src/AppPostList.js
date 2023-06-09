import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Fe" },
    { id: 2, title: "I love Be" },
  ]);

  useEffect(() => {}, []);

  const [postList, setPostList] = useState([]);
  return (
    <div className="app">
      <h1>Welcome</h1>
    </div>
  );
}

export default App;
