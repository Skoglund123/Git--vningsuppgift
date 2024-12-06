import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
 const addTodo = () => {
    if (newTodo === "") return;
    const newTask = { text: newTodo, completed: false };
    setTodos([...todos, newTask]);
    setNewTodo("")  };

 const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    const todo = updatedTodos[index];
    todo.completed = !todo.completed;
    setTodos(updatedTodos); };

const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Lägg till en todo"
        />
        <button onClick={addTodo}>Lägg till</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
