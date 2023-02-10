import connection from '../models/connection';
import LoginModel from '../models/login.model';
import ILogin from '../interfaces/login.interface';
import jwt from '../jwt/jwt';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async createLogin(user: ILogin) : Promise<{ type: string | null, message: string }> {
    const { userData } = await this.model.createLogin(user);
    if (!userData) return { type: 'WRONG_FIELDS', message: 'Username or password invalid' };

    const { id, username: usernamee, vocation, level, password: passwordd } = userData;
    const object = { id, username: usernamee, vocation, level, password: passwordd };

    const token = jwt.generateToken(object);
    return { type: null, message: token };
  }
}

export default LoginService;