export type Role = 'admin' | 'customer';

export interface User {
  id: string;
  email: string;
  password?: string; // Only for mock auth logic
  name: string;
  role: Role;
  phone?: string;
  address?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  categoryId: string;
  brand: string;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  isPromo?: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  shippingAddress: string;
  status: OrderStatus;
  paymentMethod: 'COD';
  createdAt: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  content: string;
  rating: number;
  date: string;
}