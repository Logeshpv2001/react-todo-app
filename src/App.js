import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === 'Not Completed' ? 'Completed' : 'Not Completed' }
          : todo
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onAdd={addTodo} todos={todos} onDelete={deleteTodo} onUpdateStatus={updateStatus} />} />
      </Routes>
    </Router>
  );
};

const Home = ({ onAdd, todos, onDelete, onUpdateStatus }) => {
  const [filterStatus, setFilterStatus] = useState('All');

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
  };
  return (
    <>


      <h1 className='first'>My todo</h1>
      <br />

      <TodoForm onAdd={onAdd} />
      <TodoList todos={todos} onDelete={onDelete} onUpdateStatus={onUpdateStatus} filterStatus={filterStatus} />
      <br />

      <h2>My Todos</h2>
      <div className='status-filter'>
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select id="statusFilter" value={filterStatus} onChange={handleStatusChange}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <br /> <br />



      <div className="todo-container">

        <div className="todo-card">
          <h3>Todo 1</h3>
          <p>Description 1</p>
          <p>Status: Not Completed</p>
          <button>Edit</button>
          <button className='delete-btn'>Delete</button>
        </div>

        <div className="todo-card">
          <h3>Todo 2</h3>
          <p>Description 2</p>
          <p>Status: Completed</p>
          <button>Edit</button>
          <button className='delete-btn'>Delete</button>
        </div>

        <div className="todo-card">
          <h3>Todo 3</h3>
          <p>Description 3</p>
          <p>Status: Not Completed</p>
          <button>Edit</button>
          <button className='delete-btn'>Delete</button>
        </div>
      </div>

    </>
  );
}

export default App;
