import { UserRepository } from './repositories/UserRepository';
import { ProductRepository } from './repositories/ProductRepository';
import { repositoryRegistry } from './RepositoryRegistry';

repositoryRegistry.register('users', new UserRepository());
repositoryRegistry.register('products', new ProductRepository());
