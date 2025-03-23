export interface Subscription {
  id: string;
  name: string;
  image: string;
  priceFrom: number;
  priceTo: number;
  isPremium?: boolean;
  discount?: number;
  description?: string;
  rating?: number;
  reviewCount?: number;
  category?: string;
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  sortBy: 'popularity' | 'rating' | 'price';
}