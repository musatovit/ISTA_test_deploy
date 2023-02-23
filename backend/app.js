require('dotenv').config();
const path = require('path');
const express = require('express');

const db = require('./db/models');
const config = require('./config/config');

const apiAuthRoute = require('./routes/auth.routes');
const apiPostRoute = require('./routes/posts.routes');
const apiNewsRoute = require('./routes/news.routes');
const apiEasyWeekRoute = require('./routes/easyweek.routes');
const apiMail = require('./routes/mail.routes');
const apiEmailForm = require('./routes/emailForm.routes');
const apiTelegram = require('./routes/telegram.routes');
const apiPhoneForm = require('./routes/phoneForm.routes');
const apiAboutUs = require('./routes/description.routes');

const app = express();
const PORT = process.env.PORT || 4000;

const buildDir = path.join(__dirname, '../frontend/build');
app.use(express.static(buildDir));

config(app);

app.use('/api/auth', apiAuthRoute);
app.use('/api/posts', apiPostRoute);
app.use('/api/news', apiNewsRoute);
app.use('/api/easyweek', apiEasyWeekRoute);
app.use('/api/mail', apiMail);
app.use('/api/email', apiEmailForm);
app.use('/api/telegram', apiTelegram);
app.use('/api/phone', apiPhoneForm);
app.use('/api/about', apiAboutUs);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

const start = async () => {
  try {
    await db.sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`Сервер слушает ${PORT} порт`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
start();
