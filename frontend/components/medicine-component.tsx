import { PillBottle } from "lucide-react";

const MedicineComponent = ({
  name,
  price,
}: {
  name: string;
  price: number;
}) => {
  return (
    <div className="rounded-lg p-2 flex items-center justify-between bg-gradient-to-r from-[#8B0001] to-[#C34632] text-sm">
      <div className="flex items-center text-white">
        <PillBottle />
        <p>{name}</p>
      </div>
      <div className="bg-white text-[#8B0001] p-1">
        £{price ? price : "N/A"}
      </div>
    </div>
  );
};

export default MedicineComponent;
