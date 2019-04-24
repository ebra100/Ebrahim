import { sequelizeModel } from 'ts-sequelize-models';
import { DefineAttributes, DataTypes, Model, DefineOptions } from 'sequelize';

export class Mobile_users extends sequelizeModel {
    getAttributes(DataTypes: DataTypes): DefineAttributes {
          return {
              device_username:DataTypes.STRING,
              name:DataTypes.STRING,
              email:DataTypes.STRING,
              device_password :DataTypes.STRING,
              mobile_number:DataTypes.STRING,
              

          };

    }


}