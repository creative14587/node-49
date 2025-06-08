export default (sequelize, DataTypes) => 
    sequelize.define('like_res', {
        user_id: DataTypes.INTEGER,
        res_id: DataTypes.INTEGER,
        data_like: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'like_res',
        timestamps: false,
    });