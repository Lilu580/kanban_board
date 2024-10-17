const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  assignee: String,
  dueDate: Date,
  status: {
    type: String,
    enum: ['open', 'in progress', 'completed'],
    default: 'open',
  },
});

module.exports = mongoose.model('Task', taskSchema);
