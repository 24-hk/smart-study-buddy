const express = require('express');
const router  = express.Router();
const quiz    = require('../models/Quiz');

// GET /api/quiz/:userId  — load all quiz results
router.get('/:userId', async (req, res) => {
  try {
    const quizzes = await Quiz.find({ userId: req.params.userId })
                              .sort({ completedAt: -1 });
    res.json(quizzes);
  } catch { res.status(500).json({ error: 'Something went wrong' }); }
});

// POST /api/quiz  — save a quiz result
router.post('/', async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.json(quiz);
  } catch { res.status(500).json({ error: 'Something went wrong' }); }
});

module.exports = router;