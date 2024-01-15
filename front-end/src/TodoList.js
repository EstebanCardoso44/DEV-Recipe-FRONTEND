// TodoList.js

import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, addTask, toggleTask, deleteTask }) => {
  const [newTask, setNewTask] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('medium'); // Default priority

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTask({ text: newTask, priority: newTaskPriority });
      setNewTask('');
      setNewTaskPriority('medium'); // Reset to default priority
    }
  };

  return (
    <div className="todo-list">
      <h1>Ma Liste de Tâches</h1>
      {/* Formulaire pour ajouter une nouvelle tâche */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter une nouvelle tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select onChange={(e) => setNewTaskPriority(e.target.value)} value={newTaskPriority}>
          <option value="high">Haute</option>
          <option value="medium">Moyenne</option>
          <option value="low">Basse</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>

      {/* Liste des tâches */}
      <ul>
        {tasks.map((task) => (
          // Passer les fonctions de gestion et les détails de la tâche au composant TodoItem
          <TodoItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
