import { IUserRepository, User } from "./IUserRepository";
import { DB } from "./Pg";

export class UserRepository implements IUserRepository {
  private db = DB.getInstance().connection;

  getAllUsers(): Promise<User[]> {
    return this.db.manyOrNone("SELECT * FROM test_table");
  }
}
