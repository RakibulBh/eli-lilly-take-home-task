"use client";
import Header from "@/components/header";
import MedicineContainer from "@/components/medicine-container";
import MedicineHeader from "@/components/medicine-header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  return (
    <div className="h-screen bg-white flex flex-col space-y-12">
      <Header setSearchTerm={setSearchTerm} />
      <div className="px-64 space-y-4">
        <MedicineHeader sortAsc={sortAsc} setSortAsc={setSortAsc} />
        <MedicineContainer sortAsc={sortAsc} searchTerm={searchTerm} />
      </div>
    </div>
  );
}
