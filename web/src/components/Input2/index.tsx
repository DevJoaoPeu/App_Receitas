import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input2 = ({ ...rest }: InputProps) => {
  return <input className="bg-blue-500 max-w-[22rem] w-full px-2 py-[.4rem] text-white border-none outline-none placeholder-gray-300 rounded-md" {...rest} />;
};

