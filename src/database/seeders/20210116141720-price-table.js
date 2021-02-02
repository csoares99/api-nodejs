const uuid = require('uuid');

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('price-table', [
    { id: uuid.v4(), origin: '011', destination: '016', minute_value: 1.90, created_at: new Date(), updated_at: new Date() },
    { id: uuid.v4(), origin: '011', destination: '017', minute_value: 1.70, created_at: new Date(), updated_at: new Date() },
    { id: uuid.v4(), origin: '011', destination: '018', minute_value: 0.90, created_at: new Date(), updated_at: new Date() },
    { id: uuid.v4(), origin: '016', destination: '011', minute_value: 2.90, created_at: new Date(), updated_at: new Date() },
    { id: uuid.v4(), origin: '017', destination: '011', minute_value: 2.70, created_at: new Date(), updated_at: new Date() },
    { id: uuid.v4(), origin: '018', destination: '011', minute_value: 1.90, created_at: new Date(), updated_at: new Date() }
  ], {}),


  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('price-table', null, {})
};
