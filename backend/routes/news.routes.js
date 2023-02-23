const router = require('express').Router();
const { New } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const News = await New.findAll({ raw: true });
    res.status(200).json(News);
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { img, title, description, url } = req.body;
    if (img !== '' && title !== '' && description !== '' && url !== '') {
      const News = await New.create({
        img,
        title,
        description,
        url,
        userId: req.session.userId,
      });
      res.json(News);
    }
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const idor = await New.findOne({ where: { userId: req.session.userId } });
    if (req.session.userId === 1 || req.session.userId === idor.userId) {
      const result = await New.destroy({ where: { id } });
      res.json(Number(id));
    }
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { img, title, description, url } = req.body;
    if (img !== '' && title !== '' && description !== '' && url !== '') {
      const idor = await New.findOne({ where: { userId: req.session.userId } });
      if (req.session.userId === 1 || req.session.userId === idor.userId) {
        await New.update({ img, title, description, url }, { where: { id } });
        const data = await New.findOne({ where: { id } });
        res.json(data);
      }
    }
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});
module.exports = router;
