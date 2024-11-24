import React from "react";
import Button from "./button";
import { Plus, Filter, SortAsc, SortDesc } from "lucide-react";
import AddMedicineDialog from "./add-medicine-dialog";
import FilterDialog from "./filter-dialog";

const MedicineHeader = ({
  setSortAsc,
  sortAsc,
  minMax,
  setMinMax,
}: {
  sortAsc: boolean;
  setSortAsc: (value: boolean) => void;
  minMax: [number, number];
  setMinMax: (values: [number, number]) => void;
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
        <FilterDialog setMinMax={setMinMax} minMax={minMax} />
        <AddMedicineDialog />
      </div>
    </div>
  );
};

export default MedicineHeader;
