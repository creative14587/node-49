export default (sequelize, DataTypes) => 
    sequelize.define('restaurant', {
        res_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        res_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        info: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: 'restaurant',
        timestamps: false,
    });