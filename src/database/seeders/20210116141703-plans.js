const uuid = require('uuid');

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('plans',
    [
      {
        id: uuid.v4(),
        name: 'Plan one',
        minutes: 30,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: uuid.v4(),
        name: 'Plan two',
        minutes: 60,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: uuid.v4(),
        name: 'Plan three',
        minutes: 120,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('plans', null, {}),
};
