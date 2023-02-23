module.exports = {
  async up(queryInterface) {
    const setPosts = [
      {
        img: 'https://img.staticmb.com/mbcontent//images/uploads/2023/1/real-estate.jpg',
        title: 'Риэлторское агентсво - создание очереди заявок',
        description:
          'Создали профиль агентства в Instagram *(принадлежит экстремисткой организации Meta, запрещенной в РФ). Через связку Instagram* - креатив - посадочная страница - форма для обратной связи получен 301 лид из которых 70% - целевые. Медианная цена заявки - 143 рубля. ',
        userId: 1,
      },
      {
        img: 'https://www.macleans.ca/wp-content/uploads/2019/10/SUREX-investing-in-real-estate-FEATURE.jpg',
        title: 'Агентство недвижимости - заявки на покупку квартир в новом ЖК',
        description: 'Цель: Создание очереди лидов при максимальной стоимости заявки - 1400 р. Итоги: Получено -  36 лидов, цена одной заявки - 1204, за время хода РК - 2,4 сделки/ мес в среднем.',
        userId: 1,
      },
      {
        img: 'https://guardian.ng/wp-content/uploads/2020/06/real-estate.jpg',
        title: 'Создание очереди лидов для застройщика на 3 новых ЖК',
        description: 'Цель: построить очередь заявок на покупку квартир в ипотеку в новых ЖК. Итоги: 11 работающих связок, реклама нескольких ЖК вместе по ЦА - конверсия с лендингов повысилась на 20%, получено 153 теплых лида по цене 1300р/лид',
        userId: 1,
      },
    ];
    const posts = setPosts.map((post) => ({
      ...post,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Posts', posts);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
