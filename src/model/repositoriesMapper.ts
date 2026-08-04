import { UserRepository } from './repositories/UserRepository';
import { ProductRepository } from './repositories/ProductRepository';
import { repositoryRegistry } from './RepositoryRegistry';
import { PhotoGalleryRepository } from './repositories/PhotoGalleryRepository';

repositoryRegistry.register('users', new UserRepository());
repositoryRegistry.register('products', new ProductRepository());
repositoryRegistry.register('photo_gallery', new PhotoGalleryRepository());
