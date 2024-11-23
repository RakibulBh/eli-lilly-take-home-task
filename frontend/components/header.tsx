import React from "react";
import Statistic from "./statistic";
import SearchBar from "./search-bar";

const Header = () => {
  return (
    <div className="h-64 bg-gradient-to-b from-[#8B0001] to-[#C34632]">
      <div className="w-64 flex justify-between">
        <Statistic value="200" desc="medicines" />
        <Statistic value="£240" desc="avg. price" />
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
