import React, { useState, useEffect } from 'react';
import KanbanBoard from '../components/Board';
import Stats from '../components/Stats';
import TaskForm from '../components/Form';
import { getTasks, createTask, updateTaskStatus } from '../services/api';
import '../styles/global.css';
import { getStats } from '@/services/getStats';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
      setStats(getStats(tasks))
    };

    fetchData();
  }, []);


  const handleNewTask = async (taskData) => {
    const newTask = await createTask(taskData);
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setStats(getStats(updatedTasks))
  };

  const handleUpdateTaskStatus = async (taskId, newStatus) => {
    try {
      await updateTaskStatus(taskId, newStatus);
  
      const updatedTasks = tasks.map(task => {
        if (task._id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      });
  
      setTasks(updatedTasks);
      setStats(getStats(updatedTasks))
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Kanban Task Manager</h1>
      <Stats stats={stats} />
      <TaskForm onSubmit={handleNewTask} />
      <KanbanBoard tasks={tasks} handleUpdateTaskStatus={handleUpdateTaskStatus}/>
    </div>
  );
};

export default Home;