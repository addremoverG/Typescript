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
    
    const connectionString = process.env.DATABASE_URL;

    this.client = pgp(
      connectionString
        ? {
            connectionString: connectionString,
            allowExitOnIdle: false,
          }
        : {
            ...credentials,
            allowExitOnIdle: true,
          },
    );
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

  async queryZdjecia(galeria?: string) {
    if (galeria) {
      return await this.client.any(
        'SELECT * FROM zdjecia WHERE galeria = $1 ORDER BY idt',
        [galeria],
      );
    }
    return await this.client.any('SELECT * FROM zdjecia ORDER BY idt');
  }

  async dodajZdjecie(link: string, galeria: string, komentarz: string) {
    return await this.client.none(
      'INSERT INTO zdjecia (link, galeria, komentarz) VALUES ($1, $2, $3)',
      [link, galeria, komentarz],
    );
  }

  async usunZdjecie(idt: number) {
    return await this.client.none('DELETE FROM zdjecia WHERE idt = $1', [idt]);
  }
}