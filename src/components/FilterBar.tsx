import { useState } from 'react';
import Select from 'react-select';
import { FilterOptions } from '../types';

interface Props {
  onFilterChange: (filters: FilterOptions) => void;
}

const categories = [
  { value: 'all', label: 'Все категории' },
  { value: 'streaming', label: 'Стриминг' },
  { value: 'gaming', label: 'Игры' },
  { value: 'education', label: 'Образование' },
];

const sortOptions = [
  { value: 'popularity', label: 'По популярности' },
  { value: 'rating', label: 'По рейтингу' },
  { value: 'price', label: 'По цене' },
];

export function FilterBar({ onFilterChange }: Props) {
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    priceRange: [0, 10000],
    sortBy: 'popularity',
  });

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          className="w-full"
          options={categories}
          defaultValue={categories[0]}
          onChange={(option) => handleFilterChange('category', option?.value)}
          placeholder="Выберите категорию"
        />
        
        <Select
          className="w-full"
          options={sortOptions}
          defaultValue={sortOptions[0]}
          onChange={(option) => handleFilterChange('sortBy', option?.value)}
          placeholder="Сортировка"
        />
        
        <div className="flex items-center space-x-4">
          <input
            type="number"
            placeholder="От"
            className="w-full px-3 py-2 border rounded"
            onChange={(e) => handleFilterChange('priceRange', [
              parseInt(e.target.value) || 0,
              filters.priceRange[1]
            ])}
          />
          <input
            type="number"
            placeholder="До"
            className="w-full px-3 py-2 border rounded"
            onChange={(e) => handleFilterChange('priceRange', [
              filters.priceRange[0],
              parseInt(e.target.value) || 10000
            ])}
          />
        </div>
      </div>
    </div>
  );
}