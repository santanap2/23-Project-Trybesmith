import { Request, Response } from 'express';
import LoginService from '../services/login.service';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public createLogin = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username) return res.status(400).json({ message: '"username" is required' });
    if (!password) return res.status(400).json({ message: '"password" is required' });

    const { type, message } = await this.loginService.createLogin({ username, password });
    
    if (type) return res.status(401).json({ message });
    
    return res.status(200).json({ token: message });
  };
}

export default LoginController;