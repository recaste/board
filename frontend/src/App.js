import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import axios from 'axios';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '', status: 'Not Started' });

    useEffect(() => {
        axios.get('http://localhost:3001/api/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleAddTask = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/tasks', newTask);
            setTasks([...tasks, response.data]);
            setNewTask({ title: '', description: '', status: 'Not Started' });
        } catch (error) {
            console.error(error);
        }
    };

    const handleMoveTask = async (taskId, newStatus) => {
        try {
            await axios.put(`http://localhost:3001/api/tasks/${taskId}`, { status: newStatus });
            setTasks(tasks.map(task => task._id === taskId ? { ...task, status: newStatus } : task));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} placeholder="Task Title" />
            <input type="text" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} placeholder="Task Description" />
            <button onClick={handleAddTask}>Add Task</button>
            <Board tasks={tasks} onMoveTask={handleMoveTask} />
        </div>
    );
}

export default App;
