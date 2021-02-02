import Sequelize, { Model } from 'sequelize';
const database = require('../../config/database');

export interface IPlan {
    name: string;
    minutes: string;
}

class Plan extends Model {
    public id: string;
    public name: string;
    public minutes: number;
}

Plan.init({
    id: {
        type: Sequelize.UUIDV4,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    minutes: Sequelize.DOUBLE,
},
    {
        tableName: 'plans',
        sequelize: new Sequelize.Sequelize(database),
        freezeTableName: true,
    })

export default Plan;