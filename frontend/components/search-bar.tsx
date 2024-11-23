import { Search } from "lucide-react";
const SearchBar = () => {
  return (
    <div className="bg-white px-4 py-2 flex gap-2 text-gray-600 rounded-lg">
      <Search />
      <input
        placeholder="search"
        className="focus:outline-none w-full placeholder:text-gray-600 text-black"
      />
    </div>
  );
};

export default SearchBar;
