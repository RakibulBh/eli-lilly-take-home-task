"use client";
import React, { useEffect, useState } from "react";
import Statistic from "./statistic";
import SearchBar from "./search-bar";
import axios from "axios";

const Header = () => {
  // TODO: implement fetch avarage price
  const [medicineCount, setMedicineCount] = useState<number>(0);

  useEffect(() => {
    axios
      .get("http://0.0.0.0:8000/medicines/")
      .then((response) => setMedicineCount(response.data.medicines.length))
      .catch((response) => setMedicineCount(0));
  }, []);

  return (
    <div className="h-96 bg-gradient-to-b from-[#8B0001] to-[#C34632] flex flex-col items-center justify-center">
      <div className="w-[30rem] space-y-8">
        <div className="flex justify-between">
          <Statistic value={medicineCount} desc="Medicines" />
          <Statistic value="£240" desc="avg. price" />
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
