import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.orderService.getAll();
    return res.status(200).json(result);
  };

  public createOrder = async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const { authorization } = req.headers;

    const { code, message } = await this.orderService.createOrder({ productsIds, authorization });
  
    if (code) return res.status(code).json({ message });

    return res.status(201).json(message);
  };
}

export default OrderController;