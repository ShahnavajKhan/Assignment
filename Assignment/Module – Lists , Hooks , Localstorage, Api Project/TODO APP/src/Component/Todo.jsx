import React, { useState } from "react";
import './Todo.css';
import { Edit, Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
    setNewTodo(todo.text);
  };

  const handleUpdateTodo = () => {
    setTodos(todos.map(todo => 
      todo.id === currentTodo.id ? { ...todo, text: newTodo } : todo
    ));
    setIsEditing(false);
    setNewTodo("");
    setCurrentTodo({});
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  return (
    <div className="app-container">
      <div className="todo-wrapper">
        <h4><u>Grocery Shopping</u></h4>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add something to your list"
          className="todo-input"
          aria-label="New todo input"
        />
        <button 
          onClick={isEditing ? handleUpdateTodo : handleAddTodo} 
          className="todo-button"
          aria-label={isEditing ? "Update Task" : "Add Task"}
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>
        {todos.length === 0 && <p className="empty-message">No todos available</p>}
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              {todo.text}
              <div>
                <IconButton onClick={() => handleEditTodo(todo)} aria-label="edit">
                  <Edit />
                </IconButton>
                <IconButton 
                  onClick={() => handleDeleteTodo(todo.id)}
                  aria-label="delete"
                >
                  <Delete />
                </IconButton>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleDeleteAll} className="delete-all-button">Delete List</button>
      </div>
    </div>
  );
};

export default Todo;
