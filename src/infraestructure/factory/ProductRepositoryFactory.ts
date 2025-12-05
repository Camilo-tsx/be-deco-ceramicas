import { ProductsRepository } from "../../domain/repositories/ProductRepository";
import { MySQLProductsRepository } from "../repositories/SQLProductRepositories";

export const createProductRepository = (): ProductsRepository => {
  return new MySQLProductsRepository();
};
