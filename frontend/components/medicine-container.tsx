import axios from "axios";
import { useEffect, useState } from "react";
import MedicineComponent from "./medicine-component";
import { Medicine } from "@/types";

const MedicineContainer = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    axios
      .get("http://0.0.0.0:8000/medicines/")
      .then((response) => setMedicines(response.data));
  });

  return (
    <div className="grid grid-rows-3 gap-2">
      {medicines.map((medicine) => (
        <MedicineComponent name={medicine.name} price={medicine.price} />
      ))}
    </div>
  );
};

export default MedicineContainer;
