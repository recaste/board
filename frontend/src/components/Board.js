import React from 'react';
import Column from './Column';

function Board({ tasks, onMoveTask }) {
    const columns = ['Not Started', 'In Progress', 'Done'];

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {columns.map((column, index) => (
                <Column key={index} title={column} tasks={tasks.filter(task => task.status === column)} onMoveTask={onMoveTask} />
            ))}
        </div>
    );
}

export default Board;
