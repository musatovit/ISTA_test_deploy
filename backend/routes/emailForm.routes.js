const router = require('express').Router();
const { Emailform } = require('../db/models');
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM;

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    if (email !== '') {
      let isTrue = await Emailform.findOne({ where: { email: email } });
      const bot = new TelegramBot(token, { polling: true });
      await bot.sendMessage(746796578, `email: ${req.body.email}`);
      await bot.stopPolling();
      if (email === null || isTrue === null) {
        const newEmail = await Emailform.create({
          email,
        });

        res.status(200).json(newEmail);
      } else {
        res.status(406), json({ message: 'Такой email уже существует' });
      }
    }
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});

module.exports = router;
