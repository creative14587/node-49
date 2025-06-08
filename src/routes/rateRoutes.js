import express from 'express';
import db from '../models/index.js';

const router = express.Router();
const { RateRes } = db;

router.post('/', async (req, res) => {
    const { user_id, res_id, amount } = req.body;
    try {
        const rates = await RateRes.create({ user_id, res_id, amount });
        res.json(rates);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create rating' });
    }
});

router.get('/restaurants/:res_id', async (req, res) => {
    try {
        const rates = await RateRes.findAll({ where: { res_id: req.params.res_id } });
        res.json(rates);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch ratings' });
    }
});

router.get('/users/:user_id', async (req, res) => {
    try {
        const rates = await RateRes.findAll({ where: { user_id: req.params.user_id } });
        res.json(rates);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch ratings' });
    }
});

export default router;