import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: InputProps) => {
  return <input className="bg-blue-500 px-3 py-2 text-white border-none outline-none placeholder-gray-300 rounded-md" {...rest} />;
};
