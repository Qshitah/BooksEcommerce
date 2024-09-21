export interface Product {
  id: number;
  title: string;
  author: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
}
