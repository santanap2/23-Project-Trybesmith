import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public insertProduct = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    
    if (!name) return res.status(400).json({ message: '"name" is required' });
    if (!amount) return res.status(400).json({ message: '"amount" is required' });

    const { type, message } = await this.productService.insertProduct(req.body);
    if (type) return res.status(422).json({ message });
    
    return res.status(201).json(message);
  };

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.productService.getAll();
    res.status(200).json(result);
  };
}

export default ProductController;