import { ButtonProps } from "@/utils/Types";

const Button = ({ children, type, disabled, onClick }: ButtonProps) => {
  return (
    <>
      <button type={type} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
