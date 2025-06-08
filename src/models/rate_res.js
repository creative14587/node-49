export default (sequelize, DataTypes) => 
    sequelize.define('rate_res', {
        user_id: DataTypes.INTEGER,
        res_id: DataTypes.INTEGER,
        amount: DataTypes.INTEGER,
        data_rate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'rate_res',
        timestamps: false,
    });