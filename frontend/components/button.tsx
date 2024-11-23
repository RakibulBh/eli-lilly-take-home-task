import React from "react";

const Button = ({
  children,
  Icon,
}: {
  children: React.ReactNode;
  Icon: React.FC;
}) => {
  return (
    <button className="p-2 hover:bg-opacity-85  bg-[#901615] text-white text-semibold rounded-md font-semibold flex gap-2">
      <Icon />
      {children}
    </button>
  );
};

export default Button;
