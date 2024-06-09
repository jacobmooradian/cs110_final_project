const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const chatroomRoutes = require('./routes/chatroomRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api', chatroomRoutes);
app.use('/api/auth', authRoutes);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
