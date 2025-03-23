import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block p-3 bg-white/10 rounded-full mb-6"
          >
            <Gift size={40} />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Подарите впечатления
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Выбирайте из лучших цифровых подписок для ваших близких
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Выбрать подписку
          </motion.button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
    </motion.section>
  );
}