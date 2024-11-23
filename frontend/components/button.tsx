import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className="p-2 rounded-md font-semibold">{children}</button>;
};

export default Button;
