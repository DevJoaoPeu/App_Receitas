import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: InputProps) => {
  return <input className="" {...rest} />;
};
