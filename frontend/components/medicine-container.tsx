"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import MedicineComponent from "./medicine-component";
import { Medicine } from "@/types";
import EditMedicineDialog from "./edit-medicine-dialog";

const MedicineContainer = ({
  searchTerm,
  sortAsc,
  minMax,
}: {
  searchTerm: string;
  sortAsc: boolean;
  minMax: [number, number];
}) => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    axios
      .get("http://0.0.0.0:8000/medicines/")
      .then((response) => {
        setMedicines(response.data.medicines);
        setFilteredMedicines(response.data.medicines);
      })
      .catch((response) => setMedicines([]));
  }, []);

  useEffect(() => {
    setFilteredMedicines(
      medicines.filter((value) =>
        value.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  useEffect(() => {
    setFilteredMedicines(
      medicines.filter(
        (medicine) => medicine.price <= minMax[1] && medicine.price >= minMax[0]
      )
    );
  }, [minMax]);

  useEffect(() => {
    sortAsc
      ? setFilteredMedicines(
          filteredMedicines.sort((a, b) => a.price - b.price)
        )
      : setFilteredMedicines(
          filteredMedicines.sort((a, b) => b.price - a.price)
        );
  }, [sortAsc]);

  return (
    <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
      {filteredMedicines &&
        filteredMedicines.map((medicine: Medicine) => (
          <EditMedicineDialog key={medicine.name} medicine={medicine} />
        ))}
    </div>
  );
};

export default MedicineContainer;
