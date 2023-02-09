import connection from '../models/connection';
import UserModel from '../models/user.model';
import IUser from '../interfaces/user.interface';
import JWT from '../jwt/jwt';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: IUser) : Promise<string> {
    const result = await this.model.createUser(user);
    const token = JWT.generateToken(result);
    return token;
  }
}

export default UserService;