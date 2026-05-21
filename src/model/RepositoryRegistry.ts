import { IRepository } from './interfaces/IRepository';

class RepositoryRegistry {
  private repositories = new Map<string, IRepository>();

  register(name: string, repository: IRepository): void {
    this.repositories.set(name, repository);
  }

  get(name: string): IRepository {
    const repo = this.repositories.get(name);
    if (!repo) {
      throw new Error(`Repository not found: ${name}`);
    }
    return repo;
  }

  getAll(): Record<string, IRepository> {
    return Object.fromEntries(this.repositories);
  }
}

export const repositoryRegistry = new RepositoryRegistry();
