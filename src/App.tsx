import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SubscriptionCard } from './components/SubscriptionCard';
import { SearchBar } from './components/SearchBar';
import { HeroSection } from './components/HeroSection';
import { FilterBar } from './components/FilterBar';
import { subscriptions } from './data/subscriptions';
import { FilterOptions } from './types';

function App() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    priceRange: [0, 10000],
    sortBy: 'popularity',
  });

  const filteredSubscriptions = subscriptions
    .filter((sub) => {
      const matchesSearch = sub.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = filters.category === 'all' || sub.category === filters.category;
      const matchesPrice = sub.priceFrom >= filters.priceRange[0] && sub.priceTo <= filters.priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'price':
          return a.priceFrom - b.priceFrom;
        default:
          return (b.reviewCount || 0) - (a.reviewCount || 0);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <SearchBar search={search} setSearch={setSearch} />
          <FilterBar onFilterChange={setFilters} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSubscriptions.map((subscription) => (
            <SubscriptionCard key={subscription.id} subscription={subscription} />
          ))}
        </motion.div>
      </main>

      <footer className="bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <p className="text-gray-600">Email: support@giftsub.ru</p>
              <p className="text-gray-600">Телефон: +7 (999) 123-45-67</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <a href="#" className="text-purple-600 hover:text-purple-800 block mb-2">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800 block">
                Условия использования
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Мы принимаем</h3>
              <div className="flex space-x-4">
                <span className="text-gray-600">Visa</span>
                <span className="text-gray-600">MasterCard</span>
                <span className="text-gray-600">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;