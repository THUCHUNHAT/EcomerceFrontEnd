import { User, Product, Order, Category } from '../types';
import { INITIAL_USERS, INITIAL_PRODUCTS, INITIAL_CATEGORIES } from './mockData';

const KEYS = {
  USERS: 'pastel_users',
  PRODUCTS: 'pastel_products',
  ORDERS: 'pastel_orders',
  CATEGORIES: 'pastel_categories',
  CURRENT_USER: 'pastel_current_user',
};

// Initialize Storage
export const initStorage = () => {
  if (!localStorage.getItem(KEYS.USERS)) {
    localStorage.setItem(KEYS.USERS, JSON.stringify(INITIAL_USERS));
  }
  if (!localStorage.getItem(KEYS.PRODUCTS)) {
    localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
  }
  if (!localStorage.getItem(KEYS.CATEGORIES)) {
    localStorage.setItem(KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
  }
  if (!localStorage.getItem(KEYS.ORDERS)) {
    localStorage.setItem(KEYS.ORDERS, JSON.stringify([]));
  }
};

// Generic Helpers
const get = <T,>(key: string): T[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const set = <T,>(key: string, data: T[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Specific Accessors
export const storageService = {
  getUsers: () => get<User>(KEYS.USERS),
  setUsers: (users: User[]) => set(KEYS.USERS, users),
  
  getProducts: () => get<Product>(KEYS.PRODUCTS),
  setProducts: (products: Product[]) => set(KEYS.PRODUCTS, products),
  
  getCategories: () => get<Category>(KEYS.CATEGORIES),
  setCategories: (categories: Category[]) => set(KEYS.CATEGORIES, categories),
  
  getOrders: () => get<Order>(KEYS.ORDERS),
  setOrders: (orders: Order[]) => set(KEYS.ORDERS, orders),

  setCurrentUser: (user: User | null) => {
    if (user) {
      localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(KEYS.CURRENT_USER);
    }
  },
  getCurrentUser: (): User | null => {
    const data = localStorage.getItem(KEYS.CURRENT_USER);
    return data ? JSON.parse(data) : null;
  }
};

initStorage();