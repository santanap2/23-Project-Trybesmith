import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUser(user: IUser) : Promise<IUser> {
    const { username, vocation, level, password } = user;
    const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`;
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      query,
      [username, vocation, level, password],
    );
    return { id, username, vocation, level, password };
  }
}

export default UserModel;
