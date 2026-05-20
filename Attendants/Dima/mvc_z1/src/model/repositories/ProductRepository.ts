import { IProductRepository } from '../interfaces/IProductRepository';
import { DB } from '../Pg';

export class ProductRepository implements IProductRepository {
  private db = DB.getInstance().connection;
  getAllProducts() {
    return this.db.manyOrNone('SELECT * FROM products');
  }
  getProductById(id: number) {
    return this.db.oneOrNone(`SELECT * FROM products WHERE id = ${id}`);
  }
}
