import { ProductMapper } from "../../adapter/mappers/DBMapper.js";
import { ProductsRepository } from "../../domain/repositories/ProductRepository.js";
import { ProductDTO } from "../../shared/ProductDTO.js";

interface GetProductByIdParams {
  repo: ProductsRepository;
  rawId: string;
}

export const getProductById = async ({
  repo,
  rawId,
}: GetProductByIdParams): Promise<ProductDTO | null> => {
  const id = Number(rawId);
  if (!rawId || isNaN(id)) {
    return null;
  }
  const productById = await repo.findProductById(id);

  if (!productById) {
    return null;
  }

  const product = ProductMapper.toDTO(productById);
  return product;
};
