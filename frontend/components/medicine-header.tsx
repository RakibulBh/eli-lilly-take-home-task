import React from "react";
import Button from "./button";
import { Plus, Filter } from "lucide-react";

const MedicineHeader = () => {
  return (
    <div className="flex justify-between">
      <p className="font-semibold text-3xl">Medicines</p>
      <div className="flex gap-4">
        <Button Icon={Filter}>Filter</Button>
        <Button Icon={Plus}>Add medicine</Button>
      </div>
    </div>
  );
};

export default MedicineHeader;
