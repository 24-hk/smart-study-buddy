const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
    userId:    { type: String, required: true },
    front:     String,
    back:      String,
    subject:   String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Flashcard', flashcardSchema);
