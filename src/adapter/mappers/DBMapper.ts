import { Product } from "../../domain/entities/Product";
import { DBProductDTO } from "../../shared/DBProductDTO";
import { ProductDTO } from "../../shared/ProductDTO";

export class ProductMapper {
  static toDomain(raw: DBProductDTO): Product {
    return Product.createInstance({
      id: raw.id,
      name: raw.product_name,
      price: raw.price,
      stock: raw.stock,
      category: raw.category,
      imgUrl: raw.img_url,
      slug: raw.slug,
      createdAt: raw.created_at,
      updatedAt: raw.updated_at,
    });
  }

  static toDB(product: Product): DBProductDTO {
    return {
      id: product.getId(),
      product_name: product.getName(),
      price: product.getPrice(),
      stock: product.getStock(),
      category: product.getCategory(),
      img_url: product.getImgUrl(),
      slug: product.getSlug(),
    };
  }

  static toDTO(product: Product): ProductDTO {
    return {
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
      stock: product.getStock(),
      category: product.getCategory(),
      imgUrl: product.getImgUrl(),
      slug: product.getSlug(),
      createdAt: product.getCreatedAt(),
      updatedAt: product.getUpdatedAtt(),
    };
  }
}
