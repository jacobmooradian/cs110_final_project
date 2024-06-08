const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// App
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// MongoDB Connection
mongoose.connect('mongodb+srv://jacobmooradian:cnkNnqdlTXIhaM9q@cs110cluster.lflxe9i.mongodb.net/?retryWrites=true&w=majority&appName=cs110Cluster', 
{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
