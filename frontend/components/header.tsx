import React from "react";
import Statistic from "./statistic";
import SearchBar from "./search-bar";

const Header = () => {
  return (
    <div className="h-96 bg-gradient-to-b from-[#8B0001] to-[#C34632] flex flex-col items-center justify-center">
      <div className="w-[30rem] space-y-8">
        <div className="flex justify-between">
          <Statistic value="200" desc="medicines" />
          <Statistic value="£240" desc="avg. price" />
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
