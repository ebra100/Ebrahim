'use strict';
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: DataTypes) => {
    return queryInterface.addColumn('devices', 'username',Sequelize.STRING)
    .then(function(){
      return queryInterface.addColumn('devices', 'password',Sequelize.STRING)

    })
  }
}