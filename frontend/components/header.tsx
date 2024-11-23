"use client";
import React, { useEffect, useState } from "react";
import Statistic from "./statistic";
import SearchBar from "./search-bar";
import axios from "axios";

const Header = ({
  setSearchTerm,
}: {
  setSearchTerm: (char: string) => void;
}) => {
  // TODO: implement fetch avarage price
  const [medicineCount, setMedicineCount] = useState<number>(0);
  const [avarage, setAvarage] = useState<number>(0);

  useEffect(() => {
    axios
      .get("http://0.0.0.0:8000/medicines")
      .then((response) => setMedicineCount(response.data.medicines.length))
      .catch((response) => setMedicineCount(0));
  }, []);

  useEffect(() => {
    axios
      .get("http://0.0.0.0:8000/average")
      .then((response) => setAvarage(response.data.average.toFixed(2)))
      .catch((response) => setAvarage(0));
  }, []);

  return (
    <div className="h-96 bg-gradient-to-b from-[#8B0001] to-[#C34632] flex flex-col items-center justify-center">
      <div className="w-[30rem] space-y-8">
        <div className="flex justify-between">
          <Statistic value={medicineCount} desc="Medicines" />
          <Statistic value={`£${avarage}`} desc="avg. price" />
        </div>
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
};

export default Header;
