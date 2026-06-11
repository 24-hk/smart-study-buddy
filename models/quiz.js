const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  userId:         { type: String, required: true },
  subject:        String,
  score:          Number,
  totalQuestions: Number,
  completedAt:    { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quiz', quizSchema);