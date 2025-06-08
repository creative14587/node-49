import { Sequelize } from 'sequelize';
import UserModel from './user.js';
import RestaurantModel from './restaurant.js';
import FoodModel from './food.js';
import LikeResModel from './like_res.js';
import RateResModel from './rate_res.js';
import OrderModel from './order.js';

const sequelize = new Sequelize('db_food', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = UserModel(sequelize, Sequelize.DataTypes);
db.Restaurant = RestaurantModel(sequelize, Sequelize.DataTypes);
db.Food = FoodModel(sequelize, Sequelize.DataTypes);
db.LikeRes = LikeResModel(sequelize, Sequelize.DataTypes);
db.RateRes = RateResModel(sequelize, Sequelize.DataTypes);
db.Order = OrderModel(sequelize, Sequelize.DataTypes);

db.User.hasMany(db.LikeRes);
db.Restaurant.hasMany(db.LikeRes);
db.LikeRes.belongsTo(db.User);
db.LikeRes.belongsTo(db.Restaurant);

db.User.hasMany(db.RateRes);
db.Restaurant.hasMany(db.RateRes);
db.RateRes.belongsTo(db.User);
db.RateRes.belongsTo(db.Restaurant);

db.User.hasMany(db.Order);
db.Order.belongsTo(db.User);
db.Food.hasMany(db.Order);
db.Order.belongsTo(db.Food);

export default db;