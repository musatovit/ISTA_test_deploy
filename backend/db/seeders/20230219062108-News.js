module.exports = {
  async up(queryInterface) {
    const setNews = [
      {
        img: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        title: 'Диджитал-маркетинг рынка недвижимости в новой реальности',
        description:
          'Как успевать за быстрыми изменениями в мире? Расскажем, что происходит на рынке сейчас.',
        url: 'https://teletype.in/@tatyana.shmatchenko.it/sL3yWo2DsXU',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://csq.com/wp-content/uploads/2020/07/07012020_VE_Real-Estate_-Linkedin-Background_07152020.png',
        title: 'Как продать квартиру быстро и без стресса?',
        description:
          'Ответим на самые популярные вопросы и расскажем, с какими проблемами вы можете столкнуться.',
        url: 'https://teletype.in/@nadiam/becarefulwhilesellingapartments',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://www.mckissock.com/wp-content/uploads/2016/06/GettyImages-1335050732-1024x640.jpg',
        title: 'Как искусственный интеллект помог P&G сэкономить на рекламе',
        description:
          'Бренд-директор P&G поделился методами использования ИИ в маркетинговой структуре компании',
        url: 'https://teletype.in/@tatyana.shmatchenko.it/gh2A4fcxgql',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('News', setNews);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('News', null, {});
  },
};
