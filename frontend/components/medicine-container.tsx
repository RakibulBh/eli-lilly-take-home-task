"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import MedicineComponent from "./medicine-component";
import { Medicine } from "@/types";

const MedicineContainer = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    axios
      .get("http://0.0.0.0:8000/medicines/")
      .then((response) => setMedicines(response.data.medicines))
      .catch((response) => setMedicines([]));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
      {medicines &&
        medicines.map((medicine) => (
          <MedicineComponent name={medicine.name} price={medicine.price} />
        ))}
    </div>
  );
};

export default MedicineContainer;
