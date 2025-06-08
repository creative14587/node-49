import express from 'express';
import db from './src/models/index.js';
import likeRoutes from './src/routes/likeRoutes.js';
import rateRoutes from './src/routes/rateRoutes.js';
import orderRoutes from './src/routes/orderRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/likes', likeRoutes);
app.use('/api/rates', rateRoutes);
app.use('/api/orders', orderRoutes);

db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});


