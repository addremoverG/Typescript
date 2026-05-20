export interface Product {
  id: number;
  name: string;
  image_url: string;
  price: number;
}

export interface IProductRepository {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | null>;
}
