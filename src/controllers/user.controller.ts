import { Request, Response } from 'express';
import UserService from '../services/user.service';

class ProductController {
  constructor(private userService = new UserService()) { }

  public createUser = async (req: Request, res: Response) => {
    const token = await this.userService.createUser(req.body);
    return res.status(201).json({ token });
  };
}

export default ProductController;