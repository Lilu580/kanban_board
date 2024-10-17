const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body);
    //потрібна валідація даних
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
});


router.patch('/:id', async (req, res) => {
    try {
        const task = await Task.updateOne({_id: req.params.id}, { status: req.body.status });

        if (!task) {
          return res.status(404).json({ message: 'Task not found' });
        }

        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task' });
    }
});

module.exports = router;