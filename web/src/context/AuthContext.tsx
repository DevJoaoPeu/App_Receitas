import { ReactNode, createContext } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({});
export const AuthProvider = ({ children }: AuthProviderProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
