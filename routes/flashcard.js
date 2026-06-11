const express   = require('express');
const router    = express.Router();
const Flashcard = require('../models/Flashcard');

// GET /api/flashcards/:userId  — load all flashcards
router.get('/:userId', async (req, res) => {
  try {
    const cards = await Flashcard.find({ userId: req.params.userId });
    res.json(cards);
  } catch { res.status(500).json({ error: 'Something went wrong' }); }
});

// POST /api/flashcards  — save a new flashcard
router.post('/', async (req, res) => {
  try {
    const card = new Flashcard(req.body);
    await card.save();
    res.json(card);
  } catch { res.status(500).json({ error: 'Something went wrong' }); }
});

// DELETE /api/flashcards/:id  — delete a flashcard
router.delete('/:id', async (req, res) => {
  try {
    await Flashcard.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted!' });
  } catch { res.status(500).json({ error: 'Something went wrong' }); }
});

module.exports = router;