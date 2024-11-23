import { Search } from "lucide-react";
const SearchBar = ({
  setSearchTerm,
}: {
  setSearchTerm: (char: string) => void;
}) => {
  return (
    <div className="bg-white px-4 py-2 flex gap-2 text-gray-600 rounded-lg">
      <Search />
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="search"
        className="focus:outline-none w-full placeholder:text-gray-600 text-black"
      />
    </div>
  );
};

export default SearchBar;
