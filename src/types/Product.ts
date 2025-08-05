export interface Product {
  id: string;
  name: string;
  category: 'laptop' | 'desktop' | 'gaming' | 'accessories' | 'components';
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isOnSale: boolean;
  specifications: {
    [key: string]: string;
  };
  description: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}