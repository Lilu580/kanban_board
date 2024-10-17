import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks'; // змінити при потребі

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error updating task status:', error);
  }
};


export const createTask = async (taskData) => {
  try {
    const response = await axios.post(API_URL, taskData);
    return response.data;
  } catch (error) {
    console.error('Error updating task status:', error);
  }
};

export const updateTaskStatus = async (taskId, newStatus) => {
  try {
    const response = await axios.patch(`${API_URL}/${taskId}`, { status: newStatus });
    console.log('Task updated:', response.data);
  } catch (error) {
    console.error('Error updating task status:', error);
  }
};