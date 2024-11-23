import { PillBottle } from "lucide-react";

const MedicineComponent = ({
  name,
  price,
}: {
  name: string;
  price: number;
}) => {
  return (
    <div className="rounded-lg p-2 flex items-center justify-between bg-gradient-to-r from-[#8B0001] to-[#C34632] text-sm hover:opacity-85 hover:cursor-pointer">
      <div className="flex items-center text-white gap-2">
        <PillBottle />
        <p style={{ color: name ? "" : "yellow" }} className="font-bold">
          {name ? name : "N/A"}
        </p>
      </div>
      <div className="w-16 flex items-center justify-center bg-white rounded-lg text-[#8B0001] p-1">
        {price ? "£" + price : "N/A"}
      </div>
    </div>
  );
};

export default MedicineComponent;
