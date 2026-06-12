const express = require('express');
const router  = express.Router();
const Quiz    = require('../models/quiz');

router.get('/:userId', async (req, res) => {
    try {
          const quizzes = await Quiz.find({ userId: req.params.userId })
                                    .sort({ completedAt: -1 });
          res.json(quizzes);
    } catch { res.status(500).json({ error: 'Something went wrong' }); }
});

router.post('/', async (req, res) => {
    try {
          const quiz = new Quiz(req.body);
          await quiz.save();
          res.json(quiz);
    } catch { res.status(500).json({ error: 'Something went wrong' }); }
});

module.exports = router;
