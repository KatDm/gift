import { Subscription } from '../types';

export const subscriptions: Subscription[] = [
  {
    id: '1',
    name: 'Giftery Card',
    image: 'https://placehold.co/600x400/orange/white?text=Giftery',
    priceFrom: 100,
    priceTo: 200000,
  },
  {
    id: '2',
    name: 'Giftery Card - PREMIUM',
    image: 'https://placehold.co/600x400/purple/white?text=Premium',
    priceFrom: 95,
    priceTo: 1000000,
    isPremium: true,
  },
  {
    id: '3',
    name: 'Wink+more.tv',
    image: 'https://placehold.co/600x400/red/white?text=Wink+',
    priceFrom: 150,
    priceTo: 1245,
    discount: 50,
  },
  {
    id: '4',
    name: 'Wink',
    image: 'https://placehold.co/600x400/red/white?text=Wink',
    priceFrom: 100,
    priceTo: 895,
    discount: 50,
  },
  {
    id: '5',
    name: 'Подписка СберПрайм',
    image: 'https://placehold.co/600x400/blue/white?text=Sber',
    priceFrom: 299,
    priceTo: 1990,
  },
  {
    id: '6',
    name: 'Подписка Иви',
    image: 'https://placehold.co/600x400/pink/white?text=IVI',
    priceFrom: 99,
    priceTo: 2390,
  },
];