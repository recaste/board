import React from 'react';
import Task from './Task';

function Column({ title, tasks, onMoveTask }) {
    return (
        <div style={{ width: '30%', padding: '10px', border: '1px solid #ccc' }}>
            <h3>{title}</h3>
            {tasks.map(task => (
                <Task key={task._id} task={task} onMoveTask={onMoveTask} />
            ))}
        </div>
    );
}

export default Column;
