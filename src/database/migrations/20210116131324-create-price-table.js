'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('price-table', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      destination: {
        type: Sequelize.STRING,
        allowNull: false
      },
      minute_value: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }, {
      indexes: [
        {
          unique: true,
          fields: ['origin', 'destination']
        }
      ]
    }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('price-table');
  }
};
