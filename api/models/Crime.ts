import { sequelizeModel } from 'ts-sequelize-models';
import { DefineAttributes, DataTypes, Model, DefineOptions } from 'sequelize';

export class Crime extends sequelizeModel {

    getAttributes(DataTypes: DataTypes): DefineAttributes {
        return {
            device_id: DataTypes.STRING,
            location_lat: DataTypes.STRING,
            location_lng:DataTypes.STRING,
            video_src:DataTypes.STRING,
            date:DataTypes.DATE,
            criminal_id:DataTypes.INTEGER,
            seen:DataTypes.INTEGER,
            selected:DataTypes.INTEGER,
            time:DataTypes.TIME,
            seen_by_mobile_user:DataTypes.INTEGER
        };
    }
}


