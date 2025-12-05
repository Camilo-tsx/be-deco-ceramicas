import { ProductDTO } from "../../shared/ProductDTO";

export class Product {
  private id: number;
  private name: string;
  private price: number;
  private stock: number;
  private category: string;
  private imgUrl: string | undefined;
  private slug: string | undefined;
  private createdAt: string | undefined;
  private updatedAt: string | undefined;

  private constructor(props: ProductDTO) {
    Product.validate(props);

    this.id = props.id;
    this.name = props.name.trim();
    this.price = props.price;
    this.stock = props.stock;
    this.category = props.category.trim();
    this.imgUrl = props.imgUrl;
    this.slug = props.slug;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static createInstance(props: ProductDTO): Product {
    return new Product(props);
  }

  static validate(props: ProductDTO): void {
    if (props.price < 0) throw new Error("Price cannot be negative");
    if (props.stock < 0) throw new Error("Stock cannot be negative");
    if (!props.name?.trim()) throw new Error("Name cannot be empty");
    if (!props.category?.trim()) throw new Error("Category cannot be empty");
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  getStock() {
    return this.stock;
  }
  getCategory() {
    return this.category;
  }
  getImgUrl() {
    return this.imgUrl;
  }
  getSlug() {
    return this.slug;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getUpdatedAtt() {
    return this.updatedAt;
  }

  changePrice(newPrice: number): void {
    if (newPrice <= 0) throw new Error("Price must be greater than 0");
    this.price = newPrice;
  }

  reduceStock(quantity: number): void {
    if (quantity <= 0) throw new Error("Quantity must be > 0");
    if (quantity > this.stock) throw new Error("Insufficient stock");
    this.stock -= quantity;
  }

  addStock(quantity: number): void {
    if (quantity <= 0) throw new Error("Quantity must be > 0");
    this.stock += quantity;
  }

  isAvailable() {
    return this.stock > 0;
  }
  isOutOfStock() {
    return this.stock === 0;
  }

  applyDiscount(percent: number): void {
    if (percent <= 0 || percent >= 100) {
      throw new Error("Discount must be between 0 and 100");
    }
    this.price = this.price - this.price * (percent / 100);
  }

  calculateTotal(quantity: number): number {
    if (quantity <= 0) throw new Error("Quantity must be > 0");
    if (quantity > this.stock) throw new Error("Not enough stock");

    return this.price * quantity;
  }
}
