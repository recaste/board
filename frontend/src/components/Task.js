import React from 'react';

function Task({ task, onMoveTask }) {
    const handleMove = (newStatus) => onMoveTask(task._id, newStatus);

    return (
        <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px' }}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <button onClick={() => handleMove('Not Started')}>Not Started</button>
            <button onClick={() => handleMove('In Progress')}>In Progress</button>
            <button onClick={() => handleMove('Done')}>Done</button>
        </div>
    );
}

export default Task;
