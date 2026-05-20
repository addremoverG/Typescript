import { IUserRepository } from '../interfaces/IUserRepository';
import { DB } from '../Pg';

export class UserRepository implements IUserRepository {
  private db = DB.getInstance().connection;
  getAllUsers() {
    console.log('Getting all users from DB');
    return this.db.manyOrNone('SELECT * FROM users');
  }
}
