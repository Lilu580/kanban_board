import React from 'react';

const TaskCard = ({ task }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">{task.title}</h2>
        <p className="text-gray-600 mb-4">{task.description}</p>
        <p className="text-sm text-gray-500">Assigned to: {task.assignee}</p>
        <p className="text-sm text-gray-500">Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
        <p className={`text-sm mt-2 ${task.status === 'open' ? 'text-green-500' : task.status === 'in progress' ? 'text-yellow-500' : 'text-red-500'}`}>
            Status: {task.status}
        </p>
        </div>
    );
};


export default TaskCard;