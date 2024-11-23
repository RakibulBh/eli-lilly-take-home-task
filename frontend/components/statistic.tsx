import React from "react";

const Statistic = ({ value, desc }: { value: string; desc: string }) => {
  return (
    <div className="p-4 bg-[#901615] flex items-center justify-center">
      <div className="space-y-2 text-center text-white">
        <p className="text-md">{value}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Statistic;
