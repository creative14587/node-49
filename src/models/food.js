export default (sequelize, DataTypes) => 
    sequelize.define('food', {
        food_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        food_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        info: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });