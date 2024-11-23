import React from "react";
import Button from "./button";
import { Plus, Filter, SortAsc, SortDesc } from "lucide-react";
import AddMedicineDialog from "./add-medicine-dialog";

const MedicineHeader = ({
  setSortAsc,
  sortAsc,
}: {
  sortAsc: boolean;
  setSortAsc: (value: boolean) => void;
}) => {
  return (
    <div className="flex justify-between">
      <p className="font-semibold text-3xl">Medicines</p>
      <div className="flex gap-4">
        <Button
          onClick={() => setSortAsc(!sortAsc)}
          Icon={sortAsc ? SortDesc : SortAsc}
        >
          Sort
        </Button>
        <Button Icon={Filter}>Filter</Button>
        <AddMedicineDialog />
      </div>
    </div>
  );
};

export default MedicineHeader;
