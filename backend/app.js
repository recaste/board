const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/kanban', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/tasks', taskRoutes);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
