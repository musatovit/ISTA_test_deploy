const router = require('express').Router();
require('dotenv').config();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: req.body.mail,
      subject: `Привет, ${req.body.name}`,
      text: 'Здесь будет красивый текст',
    };

    transporter.sendMail(mailOptions, (err) => console.log(err));
    res.status(200).json(req.body);
  } catch (e) {
    res.status(500).json(req.body);
  }
});

module.exports = router;
