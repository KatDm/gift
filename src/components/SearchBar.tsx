import { FiSearch } from 'react-icons/fi';

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Поиск подписки..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
}