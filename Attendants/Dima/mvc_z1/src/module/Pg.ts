import pgPromise from 'pg-promise';

export class DatabaseService {
  private readonly client: any;
  private static instance: DatabaseService;

  private constructor() {
    const pgp = pgPromise({
      capSQL: true,
      error: (error) => {
        console.error('Database error:', error);
      },
    });

    this.client = pgp({
      host: process.env.POSTGRES_HOST || 'localhost',
      port: Number(process.env.POSTGRES_PORT || 5432),
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      max: 20, // пул соединений
      allowExitOnIdle: true,
    });

    process.on('SIGTERM', () => this.disconnect());
    process.on('SIGINT', () => this.disconnect());
  }

  static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  async query<T>(sql: string, values?: any[]): Promise<T[]> {
    try {
      return await this.client.many(sql, values);
    } catch (error) {
      console.error('Query error:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.client.$pool.end();
      console.log('Database disconnected');
    } catch (error) {
      console.error('Disconnect error:', error);
    }
  }
}
