import { IUserRepository } from './IUserRepository';
import { IProductRepository } from './IProductRepository';

export type IRepository = IUserRepository | IProductRepository;
