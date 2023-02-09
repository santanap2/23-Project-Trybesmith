import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public insertProduct = async (req: Request, res: Response) => {
    const newProduct = await this.productService.insertProduct(req.body);
    return res.status(201).json(newProduct);
  };

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.productService.getAll();
    res.status(200).json(result);
  };
}

export default ProductController;