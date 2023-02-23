module.exports = {
  async up(queryInterface) {
    const setReq = [
      {
        name: 'Игорь',
        email: 'igor_ne@m.ru',
        phone: '89952347620',
        data: '05.03.23',
        comment: 'Хочу делать деньги',
        status: 'в работе',
      },
      {
        name: 'Надя',
        email: 'nad_ne@m.ru',
        phone: '89952347450',
        data: '06.03.23',
        comment: 'Открываю свой бизнес',
        status: 'в работе',
      },
      {
        name: 'Эдик',
        email: 'ed_ne@m.ru',
        phone: '89973347450',
        data: '06.03.23',
        comment: 'Давай красивый дизайн делай',
        status: 'в работе',
      },
    ];
    const reqs = setReq.map((req) => ({
      ...req,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Requests', reqs);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Requests', null, {});
  },
};
