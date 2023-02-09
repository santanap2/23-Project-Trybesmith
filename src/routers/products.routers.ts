import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const productsRouter = Router();
const productsController = new ProductController();

productsRouter.get('/products', productsController.getAll);
productsRouter.post('/products', productsController.insertProduct);

export default productsRouter;