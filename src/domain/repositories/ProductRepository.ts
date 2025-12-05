import { Product } from "../entities/Product";

export interface ProductsRepository {
  findProductsByCategory: (category: string) => Promise<Product[]>;
  findProductById: (id: number) => Promise<Product | null>;
  checkStockAvailability(
    category: string
  ): Promise<{ available: Product[]; outOfStock: Product[] }>;
}
