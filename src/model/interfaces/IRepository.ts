import { IUserRepository } from './IUserRepository';
import { IProductRepository } from './IProductRepository';
import { IPhotoGalleryRepository } from './IPhotoGallery';

export type IRepository =
  | IUserRepository
  | IProductRepository
  | IPhotoGalleryRepository;
