import connection from '../models/connection';
import UserModel from '../models/user.model';
import IUser from '../interfaces/user.interface';
import JWT from '../jwt/jwt';
import IUserError from '../interfaces/userError.interface';
import UserValidation from './validations/user.validation';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: IUser) : Promise<IUserError> {
    const errorRequired = UserValidation.userRequiredValidation(user);
    if (errorRequired) return errorRequired;

    const errorType = UserValidation.userTypeValidation(user);
    if (errorType) return errorType;

    const errorLength = UserValidation.userLengthValidation(user);
    if (errorLength) return errorLength;

    const result = await this.model.createUser(user);
    const token = JWT.generateToken(result);
    return { code: null, message: token };
  }
}

export default UserService;