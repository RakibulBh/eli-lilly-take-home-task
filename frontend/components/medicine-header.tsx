import React from "react";
import Button from "./button";

const MedicineHeader = () => {
  return (
    <div className="flex justify-between">
      <p className="font-semibold">Medicnes</p>
      <div className="flex gap-4">
        <Button>Filter</Button>
        <Button>Add medicine</Button>
      </div>
    </div>
  );
};

export default MedicineHeader;
