import React from "react";

const Statistic = ({
  value,
  desc,
}: {
  value: string | number;
  desc: string;
}) => {
  return (
    <div className="w-48 rounded-xl p-4 bg-[#901615] flex items-center justify-center">
      <div className="space-y-2 text-center text-white">
        <p className="text-xl">{value}</p>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default Statistic;
