const router = require('express').Router();
const session = require('express-session');
const { Post } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const Posts = await Post.findAll({ raw: true });
    res.status(200).json(Posts);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { img, title, description } = req.body;
    if (img !== '' && title !== '' && description !== '') {
      const Posts = await Post.create({
        img,
        title,
        description,
        userId: req.session.userId,
      });
      res.json(Posts);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const idor = await Post.findOne({
      where: { userId: req.session.userId },
    });
    if (req.session.userId === 1 || req.session.userId === idor.userId) {
      const result = await Post.destroy({ where: { id } });
      res.json(Number(id));
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description, img, title } = req.body;

    if (img !== '' && title !== '' && description !== '') {
      const idor = await Post.findOne({
        where: { userId: req.session.userId },
      });
      if (req.session.userId === 1 || req.session.userId === idor.userId) {
        await Post.update({ description, img, title }, { where: { id } });
        const data = await Post.findOne({ where: { id } });
        res.json(data);
      }
    }
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});

module.exports = router;
