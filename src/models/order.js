export default (sequelize, DataTypes) => 
    sequelize.define('order', {
        user_id: DataTypes.INTEGER,
        food_id: DataTypes.INTEGER,
        amount: DataTypes.INTEGER,
        code: DataTypes.STRING,
        arr_sub_id: DataTypes.STRING,
    }, {
        tableName: 'order',
        timestamps: false,
    });