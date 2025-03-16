const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String // Not Started, In Progress, Done
});

module.exports = mongoose.model('Task', taskSchema);
