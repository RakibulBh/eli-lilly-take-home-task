"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import MedicineComponent from "./medicine-component";
import { Medicine } from "@/types";

const MedicineContainer = ({ searchTerm }: { searchTerm: string }) => {
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

  return (
    <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
      {filteredMedicines &&
        filteredMedicines.map((medicine) => (
          <MedicineComponent
            key={medicine.name}
            name={medicine.name}
            price={medicine.price}
          />
        ))}
    </div>
  );
};

export default MedicineContainer;
