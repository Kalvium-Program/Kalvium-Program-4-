import React, { useState } from "react";

const TodoList = () => {
  // Initialize the todos state as an empty array
  const [todos, setTodos] = useState([]);

  // Initialize the newTodo state as an empty string
  const [newTodo, setNewTodo] = useState("");

  // Function to handle the input change
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Function to add a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo(""); // Clear input after adding todo
    }
  };

  // Function to toggle the completion status of a todo
  const handleToggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo} // Ensure this input field is controlled via newTodo state
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => handleToggleComplete(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
