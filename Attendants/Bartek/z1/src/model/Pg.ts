import pgPromise from 'pg-promise';

export class PG {
  private readonly client;
  static #instance: PG;

  private constructor() {
    const pgp = pgPromise();
    const credentials = {
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    } as const;
    this.client = pgp({
      ...credentials,
      allowExitOnIdle: true,
    });
  }

  static getInstance(): PG {
    if (!PG.#instance) {
      PG.#instance = new PG();
    }

    return PG.#instance;
  }

  async queryDB() {
    return await this.client.many(
      'SELECT * FROM table_name ORDER BY create_time DESC',
    );
  }
}
