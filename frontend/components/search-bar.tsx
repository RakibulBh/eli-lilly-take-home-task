import { Search } from "lucide-react";
const SearchBar = () => {
  return (
    <div className="bg-white px-4 py-2 flex gap-2 text-gray-200">
      <Search />
      <input placeholder="search" className="focus:outline-none w-full" />
    </div>
  );
};

export default SearchBar;
