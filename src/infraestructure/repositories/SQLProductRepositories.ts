import { ProductMapper } from "../../adapter/mappers/DBMapper";
import { Product } from "../../domain/entities/Product";
import { ProductsRepository } from "../../domain/repositories/ProductRepository";
import { DBProductDTO } from "../../shared/DBProductDTO";
import { db } from "../db/conection";
import { RowDataPacket } from "mysql2";

export class MySQLProductsRepository implements ProductsRepository {
  async findProductsByCategory(category: string): Promise<Product[]> {
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT p.*, c.category_name AS category FROM products p INNER JOIN categories c ON p.category_id = c.id WHERE c.category_name = ?",
      [category]
    );

    if (rows.length === 0) {
      return [];
    }

    const productsByCategory = rows.map((p) =>
      ProductMapper.toDomain(p as DBProductDTO)
    );

    return productsByCategory as Product[];
  }

  async findProductById(id: number): Promise<Product | null> {
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT p.*, c.category_name AS category FROM products p INNER JOIN categories c ON p.category_id = c.id WHERE p.id = ?",
      [id]
    );

    if (rows.length === 0) {
      return null;
    }

    const productById = ProductMapper.toDomain(rows[0] as DBProductDTO);
    return productById;
  }

  async checkStockAvailability(
    category: string
  ): Promise<{ available: Product[]; outOfStock: Product[] }> {
    const [rows] = await db.query<RowDataPacket[]>(
      `SELECT p.*, c.category_name AS category, 
     CASE WHEN p.stock > 0 THEN 'available' ELSE 'out_of_stock' END AS status 
     FROM products p 
     INNER JOIN categories c ON p.category_id = c.id 
     WHERE c.category_name = ?`,
      [category]
    );

    const availableRows = rows.filter(
      (row) => (row as any).status === "available"
    );
    const outOfStockRows = rows.filter(
      (row) => (row as any).status === "out_of_stock"
    );

    const available = availableRows.map((row) =>
      ProductMapper.toDomain(row as DBProductDTO)
    );
    const outOfStock = outOfStockRows.map((row) =>
      ProductMapper.toDomain(row as DBProductDTO)
    );

    return { available, outOfStock };
  }
}
