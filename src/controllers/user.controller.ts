import { Request, Response } from 'express';
import UserService from '../services/user.service';

class ProductController {
  constructor(private userService = new UserService()) { }

  public createUser = async (req: Request, res: Response) => {
    const { code, message } = await this.userService.createUser(req.body);
    if (code) return res.status(code).json({ message });
    return res.status(201).json({ token: message });
  };
}

export default ProductController;