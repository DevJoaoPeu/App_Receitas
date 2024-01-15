import { ReactNode, ButtonHTMLAttributes } from "react";

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: PropsButton) => {
  return <button className="bg-blue-600 py-2 rounded-md text-white" {...rest}>{children}</button>;
};
