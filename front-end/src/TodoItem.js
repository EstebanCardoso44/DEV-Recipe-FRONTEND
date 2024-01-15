// TodoItem.js

import React from 'react';

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  const priorityStyles = {
    high: { backgroundColor: 'red' },
    medium: { backgroundColor: 'yellow' },
    low: { backgroundColor: 'green' },
  };

  return (
    <li className={task.completed ? 'completed' : ''} style={priorityStyles[task.priority]}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.text}</span>
      <span style={{ marginLeft: '10px' }}>{`Priorité: ${task.priority}`}</span>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </li>
  );
};

export default TodoItem;
