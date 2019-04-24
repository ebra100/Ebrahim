import { sequelizeModel } from 'ts-sequelize-models';
import { DefineAttributes, DataTypes, Model, DefineOptions } from 'sequelize';

export class User extends sequelizeModel{

    getAttributes(DataTypes: DataTypes): DefineAttributes {
        return {
           name: DataTypes.STRING,
            password: DataTypes.STRING,
            email: { type: DataTypes.STRING, 
             validate: {
                isEmail: true
              },
            },
            station_id:DataTypes.INTEGER,
            type:DataTypes.STRING
        };
    }

 

}


