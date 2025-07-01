import React from "react";
import "./button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <div className="btn">{children}</div>;
};
