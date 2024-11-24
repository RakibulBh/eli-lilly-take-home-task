"use client";
import Header from "@/components/header";
import MedicineContainer from "@/components/medicine-container";
import MedicineHeader from "@/components/medicine-header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const [minMax, setMinMax] = useState<[number, number]>([
    0,
    Number.POSITIVE_INFINITY,
  ]);

  return (
    <div className="h-screen bg-white flex flex-col space-y-12">
      <Header setSearchTerm={setSearchTerm} />
      <div className="px-64 space-y-4">
        <MedicineHeader
          minMax={minMax}
          setMinMax={setMinMax}
          sortAsc={sortAsc}
          setSortAsc={setSortAsc}
        />
        <MedicineContainer
          minMax={minMax}
          sortAsc={sortAsc}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
}
