const router = require('express').Router();
const { PhoneForm } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const { phone } = req.body;
    if (phone !== '') {
      let isTrue = await PhoneForm.findOne({ where: { phone: phone } });
      if (phone === null || isTrue === null) {
        const newPhone = await PhoneForm.create({
          phone,
        });
        res.status(200).json(newPhone);
      } else {
        res.status(406), json({ message: 'Такой номер уже существует' });
      }
    }
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});

module.exports = router;
