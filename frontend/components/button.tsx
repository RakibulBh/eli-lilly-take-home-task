import React from "react";

const Button = ({
  children,
  Icon,
  onClick,
}: {
  children: React.ReactNode;
  Icon?: React.FC;
  onClick?: () => void;
}) => {
  const clicked = () => {
    if (!onClick) {
      return;
    }
    onClick();
  };

  return (
    <button
      onClick={clicked}
      className="p-2 hover:bg-opacity-85  bg-[#901615] text-white text-semibold rounded-md font-semibold flex gap-2"
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default Button;
