const router = require('express').Router();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM;

router.post('/', async (req, res) => {
  try {
    const bot = new TelegramBot(token, { polling: true });
    await bot.sendMessage(746796578, `телефон: ${req.body.message}`);
    await bot.stopPolling();
    res.json({ message: 'good' });
  } catch (e) {
    console.error(e);
    res.json({ message: 'error' });
  }
});

module.exports = router;
