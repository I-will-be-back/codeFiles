'use strict';

module.exports = {
  // 新增
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'shops',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      thumb_url:Sequelize.STRING,
      created_at: Sequelize.DATE,
      update_at: Sequelize.DATE
    }
  ),
  down: queryInterface => queryInterface.dropTable('shops')
};
