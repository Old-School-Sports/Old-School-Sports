'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      t1: {
        type: Sequelize.TEXT
      },
      a1: {
        type: Sequelize.TEXT
      },
      t2: {
        type: Sequelize.TEXT
      },
      a2: {
        type: Sequelize.TEXT
      },
      t3: {
        type: Sequelize.TEXT
      },
      a3: {
        type: Sequelize.TEXT
      },
      t4: {
        type: Sequelize.TEXT
      },
      a4: {
        type: Sequelize.TEXT
      },
      t5: {
        type: Sequelize.TEXT
      },
      a5: {
        type: Sequelize.TEXT
      },
      t6: {
        type: Sequelize.TEXT
      },
      a6: {
        type: Sequelize.TEXT
      },
      t7: {
        type: Sequelize.TEXT
      },
      a7: {
        type: Sequelize.TEXT
      },
      t8: {
        type: Sequelize.TEXT
      },
      a8: {
        type: Sequelize.TEXT
      },
      t9: {
        type: Sequelize.TEXT
      },
      a9: {
        type: Sequelize.TEXT
      },
      t10: {
        type: Sequelize.TEXT
      },
      a10: {
        type: Sequelize.TEXT
      },
      t11: {
        type: Sequelize.TEXT
      },
      a11: {
        type: Sequelize.TEXT
      },
      t12: {
        type: Sequelize.TEXT
      },
      a12: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Data');
  }
};