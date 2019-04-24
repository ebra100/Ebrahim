import { sequelizeModel } from 'ts-sequelize-models';
import { DefineAttributes, DataTypes, Model, DefineOptions } from 'sequelize';

export class Citizen extends sequelizeModel {
    getAttributes(DataTypes: DataTypes): DefineAttributes {
          return {
              name:DataTypes.STRING,
              national_id:DataTypes.STRING,
              address:DataTypes.STRING,
              date_of_birth :DataTypes.STRING,
              

          };

    }
}