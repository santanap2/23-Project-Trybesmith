import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.productService.getAll();
    res.status(200).json(result);
  };
}

export default ProductController;