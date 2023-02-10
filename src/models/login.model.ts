import { Pool } from 'mysql2/promise';
import ILogin from '../interfaces/login.interface';

class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createLogin(user : ILogin) : Promise<any> {
    const { username, password } = user;
    const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
    const [result] = await this.connection.execute(query, [username, password]);
    const [userData] = result as ILogin[];
    return { userData };
  }
}

export default LoginModel;
