import { sequelizeModel } from 'ts-sequelize-models';
import { DefineAttributes, DataTypes, Model, DefineOptions } from 'sequelize';

export class Device extends sequelizeModel {
    getAttributes(DataTypes: DataTypes): DefineAttributes {
          return {
              owner_email:DataTypes.STRING,
              owner_id:DataTypes.STRING,
              owner_phone:DataTypes.STRING,
              serial_number :DataTypes.STRING,
              username:DataTypes.STRING,
              password:DataTypes.STRING
              

          };

    }
}