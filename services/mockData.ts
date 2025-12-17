import { Product, Category, User } from '../types';

export const INITIAL_USERS: User[] = [
  {
    id: 'u1',
    email: 'admin@gmail.com',
    password: '123456', // In a real app, never store plain text
    name: 'Super Admin',
    role: 'admin',
  },
  {
    id: 'u2',
    email: 'customer@gmail.com',
    password: '123456',
    name: 'John Doe',
    role: 'customer',
  }
];

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'c1', name: 'Electronics' },
  { id: 'c2', name: 'Fashion' },
  { id: 'c3', name: 'Home & Living' },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Wireless Noise Cancelling Headphones',
    price: 199,
    originalPrice: 249,
    categoryId: 'c1',
    brand: 'SoundMax',
    image: 'https://picsum.photos/400/400?random=1',
    description: 'Experience premium sound quality with active noise cancellation.',
    rating: 4.5,
    reviewCount: 120,
    isPromo: true,
  },
  {
    id: 'p2',
    name: 'Minimalist Cotton T-Shirt',
    price: 25,
    categoryId: 'c2',
    brand: 'Basics',
    image: 'https://picsum.photos/400/400?random=2',
    description: '100% organic cotton, breathable and comfortable.',
    rating: 4.8,
    reviewCount: 45,
  },
  {
    id: 'p3',
    name: 'Smart Watch Series 5',
    price: 299,
    categoryId: 'c1',
    brand: 'TechTime',
    image: 'https://picsum.photos/400/400?random=3',
    description: 'Track your fitness and stay connected.',
    rating: 4.2,
    reviewCount: 89,
    isPromo: true,
  },
  {
    id: 'p4',
    name: 'Modern Table Lamp',
    price: 45,
    categoryId: 'c3',
    brand: 'Lumina',
    image: 'https://picsum.photos/400/400?random=4',
    description: 'Add a touch of elegance to your workspace.',
    rating: 4.0,
    reviewCount: 30,
  },
  {
    id: 'p5',
    name: 'Denim Jacket',
    price: 89,
    categoryId: 'c2',
    brand: 'RoughWear',
    image: 'https://picsum.photos/400/400?random=5',
    description: 'Classic denim style for everyday wear.',
    rating: 4.6,
    reviewCount: 200,
  }
];