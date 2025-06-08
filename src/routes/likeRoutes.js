import express from 'express';
import db from '../models/index.js';
import { where } from 'sequelize';

const router = express.Router();
const { LikeRes } = db;

router.post('/', async (req, res) => {
    const { user_id, res_id } = req.body;
    const like = await LikeRes.create({ user_id, res_id });
    res.json(like);
});

router.delete('/', async (req, res) => {
    const { user_id, res_id } = req.body;
    await LikeRes.destroy({ where: { user_id, res_id } });
    res.send("Like removed successfully");
});

router.get('/restaurants/:res_id', async (req, res) => {
    const likes = await LikeRes.findAll({ where: { res_id: req.params.res_id } });
    res.json(likes);
});

router.get('/users/:user_id', async (req, res) => {
    const likes = await LikeRes.findAll({ where: { user_id: req.params.user_id } });
    res.json(likes);
});

export default router;
