import Sequelize, { Model } from 'sequelize';
const database = require('../../config/database');

class PriceTable extends Model {
    public origin: string;
    public destination: string;
    public minute_value: number;
}

PriceTable.init({
    id: {
        type: Sequelize.UUIDV4,
        primaryKey: true,
        autoIncrement: true
    },
    origin: Sequelize.STRING,
    destination: Sequelize.STRING,
    minute_value: Sequelize.DOUBLE,
}, {
    tableName: 'price-table',
    sequelize: new Sequelize.Sequelize(database),
    freezeTableName: true,
})

export default PriceTable;