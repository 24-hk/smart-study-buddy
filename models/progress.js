const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId:            { type: String, required: true, unique: true },
  xp:                { type: Number, default: 0 },
  level:             { type: Number, default: 1 },
  quizzesCompleted:  { type: Number, default: 0 },
  flashcardsStudied: { type: Number, default: 0 },
  updatedAt:         { type: Date,   default: Date.now }
});

module.exports = mongoose.model('Progress', progressSchema);