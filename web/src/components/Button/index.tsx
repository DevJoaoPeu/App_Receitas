import { ReactNode, ButtonHTMLAttributes } from "react";

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: PropsButton) => {
  return <button {...rest}>{children}</button>;
};
