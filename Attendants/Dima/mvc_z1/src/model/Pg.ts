import pgPromise, { IDatabase } from "pg-promise";

export class DB {
  private static instance: DB;
  private readonly db: IDatabase<{}>;

  private constructor() {
    const pgp = pgPromise({
      connect(e) {
        console.log(`Connected: ${e.client.database}`);
      },
      error(err, e) {
        console.error("DB Error:", err, e.query);
      },
    });

    this.db = pgp({
      host: "localhost",
      port: Number(process.env.POSTGRES_PORT),
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      max: 10,
    });
  }

  public static getInstance(): DB {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance;
  }

  public getAllUsers() {
    return this.db.manyOrNone("SELECT * FROM test_table");
  }
}
