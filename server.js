const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to the database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Failed to connect to the database', err));

// Routes
app.get('/', (req, res) => {
    res.send('Cloud Data Management API');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});