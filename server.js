const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
require('dotenv').config();

const app = express();

// Allow your frontend to connect to this server
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas cloud database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch(err => console.error('Connection failed:', err));

// Your API routes
app.use('/api/progress',   require('./routes/progress'));
app.use('/api/quiz',       require('./routes/quiz'));
app.use('/api/flashcards', require('./routes/flashcard'));

// Quick test — open http://localhost:3000 in browser
app.get('/', (req, res) => {
  res.json({ message: 'Smart Study Buddy API is running!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));