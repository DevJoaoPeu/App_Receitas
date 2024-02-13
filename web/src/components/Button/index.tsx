import { ReactNode, ButtonHTMLAttributes } from "react";
import { FaSpinner } from "react-icons/fa";

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading: boolean;
}

export const Button = ({ children, loading, ...rest }: PropsButton) => {
  return (
    <button
      className={` ${loading ? "bg-blue-800": "bg-blue-600"} py-2 rounded-md text-white`}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <span className="flex justify-center py-1 ">
          <FaSpinner color="var(--white)" />
        </span>
      ) : (
        <a>{children}</a>
      )}
    </button>
  );
};
