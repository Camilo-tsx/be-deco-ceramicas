export interface ProductDTO {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  imgUrl?: string | undefined;
  slug?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}
