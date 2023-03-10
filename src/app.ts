import express from 'express';
import productsRouter from './routers/products.routers';
import userRouter from './routers/users.routers';
import orderRouter from './routers/order.routers';
import loginRouter from './routers/login.routers';

const app = express();

app.use(express.json());

app.use(productsRouter);
app.use(userRouter);
app.use(orderRouter);
app.use(loginRouter);

export default app;
