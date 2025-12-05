import { ProductMapper } from "../../adapter/mappers/DBMapper";
import { Product } from "../../domain/entities/Product";
import { ProductsRepository } from "../../domain/repositories/ProductRepository";
import { ProductDTO } from "../../shared/ProductDTO";

interface GetProductsParams {
  repo: ProductsRepository;
  category: string;
}

export const getProductByCategory = async ({
  repo,
  category,
}: GetProductsParams): Promise<ProductDTO[] | null> => {
  const validCategories = ["DECO HOME", "DECO ARTE", "COCINA", "ACCESORIOS"];

  if (!category || !validCategories.includes(category)) {
    return null;
  }
  const productsRepo = await repo.findProductsByCategory(category);
  const products = productsRepo.map((p: Product) => ProductMapper.toDTO(p));
  return products;
};
