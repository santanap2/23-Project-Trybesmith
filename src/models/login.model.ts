import { Pool } from 'mysql2/promise';
import ILogin from '../interfaces/login.interface';
import IUser from '../interfaces/user.interface';

class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createLogin(user : ILogin) : Promise<IUser> {
    const { username, password } = user;
    const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
    const [result] = await this.connection.execute(query, [username, password]);
    const [userData] = result as IUser[];
    return userData;
  }
}

export default LoginModel;
