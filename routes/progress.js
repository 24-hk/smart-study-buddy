const express  = require('express');
const router   = express.Router();
const Progress = require('../models/progress');

// GET /api/progress/:userId  — load a user's progress
router.get('/:userId', async (req, res) => {
  try {
    const data = await Progress.findOne({ userId: req.params.userId });
    res.json(data || { xp: 0, level: 1, quizzesCompleted: 0 });
  } catch { res.status(500).json({ error: 'Something went wrong' }); }
});

// POST /api/progress  — save a user's progress
router.post('/', async (req, res) => {
  try {
    const { userId, xp, level, quizzesCompleted, flashcardsStudied } = req.body;
    const data = await Progress.findOneAndUpdate(
      { userId },
      { xp, level, quizzesCompleted, flashcardsStudied, updatedAt: new Date() },
      { upsert: true, new: true }
    );
    res.json(data);
  } catch { res.status(500).json({ error: 'Something went wrong' }); }
});

module.exports = router;