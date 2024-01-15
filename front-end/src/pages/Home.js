import React, { useState } from "react";
import TodoList from '../TodoList';
import '../App.css'

const Home = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { id: tasks.length + 1, text: task.text, completed: false, priority: task.priority }]);
    };

    const toggleTask = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const Footer = () => (
        <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} ToDoList. All rights reserved.</p>
        </footer>
    );

    return (
        <div className="app1">
            <TodoList tasks={tasks} addTask={addTask} toggleTask={toggleTask} deleteTask={deleteTask} />
            <Footer />
        </div>
    );
};

export default Home;