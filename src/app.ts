import express from 'express';
import productsRouter from './routers/products.routers';
import userRouter from './routers/users.routers';

const app = express();

app.use(express.json());

app.use(productsRouter);
app.use(userRouter);

export default app;
