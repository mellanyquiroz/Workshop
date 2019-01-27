'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
  title: 'First dummy post',
  body: 'Fake text for the first dummy post',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  title: 'Second dummy post',
  body: 'Fake text for the second dummy post',
  createdAt: new Date(),
  updatedAt: new Date()
}], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
  title: 'First dummy post',
  body: 'Fake text for the first dummy post',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  title: 'Second dummy post',
  body: 'Fake text for the second dummy post',
  createdAt: new Date(),
  updatedAt: new Date()
}], {});

};
