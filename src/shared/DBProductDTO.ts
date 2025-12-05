export interface DBProductDTO {
  id: number;
  product_name: string;
  price: number;
  stock: number;
  category: string;
  img_url?: string | undefined;
  slug?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}
