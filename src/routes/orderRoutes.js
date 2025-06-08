import express from 'express';
import db from '../models/index.js';

const router = express.Router();
const { Order } = db;

router.post('/', async (req, res) => {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;
    const order = await Order.create({ user_id, food_id, amount, code, arr_sub_id });
    res.json(order);
});

export default router;