import "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div className="btn" onClick={onClick}>
      {children}
    </div>
  );
};
