import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Subscription } from '../types';

interface Props {
  subscription: Subscription;
}

export function SubscriptionCard({ subscription }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="relative">
        {subscription.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            -{subscription.discount}%
          </div>
        )}
        {subscription.isPremium && (
          <div className="absolute top-2 left-2 bg-purple-500 text-white px-2 py-1 rounded-full text-sm">
            Premium
          </div>
        )}
        <img
          src={subscription.image}
          alt={subscription.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{subscription.name}</h3>
          {subscription.rating && (
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">
                {subscription.rating} ({subscription.reviewCount})
              </span>
            </div>
          )}
        </div>
        
        {subscription.description && (
          <p className="text-gray-600 text-sm mb-4">{subscription.description}</p>
        )}
        
        <div className="mb-4">
          <p className="text-gray-600">Номинал</p>
          <p className="text-lg">
            от {subscription.priceFrom} до {subscription.priceTo} ₽
          </p>
        </div>
        
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
          Подарить
        </button>
      </div>
    </motion.div>
  );
}