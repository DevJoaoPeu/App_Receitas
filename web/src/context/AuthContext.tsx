import { api } from "@/services/apiClient";
import Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";

type ContextData = {
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>;
  SignOut: () => void;
  createReceita: (credentials: PropsReceita) => Promise<void>
};

type AuthProviderProps = {
  children: ReactNode;
};

interface SignInProps {
  email: string;
  password: string;
}

interface UserProps {
  name: string;
  id: string;
  token: string;
}

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

interface PropsReceita {
  title: string;
  description: string;
  ingredients: string;
  preparation: string;
  movie: string;
}

export const AuthContext = createContext({} as ContextData);

export const SignOut = () => {
  try {
    destroyCookie(undefined, "@appPedidos.token");
    Router.push("/");
  } catch (error) {
    console.log("Error ao deslogar");
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({} as UserProps);

  const signUp = async ({ name, email, password }: SignUpProps) => {
    try {
      const response = await api.post("/register", { name, email, password });

      toast.success("Conta criada com sucesso", {
        position: "top-center",
      });

      Router.push("/");
    } catch (error) {
      toast.error("Erro ao cadastrar", {
        position: "top-center",
      });
    }
  };

  const signIn = async ({ email, password }: SignInProps) => {
    try {
      const response = await api.post("/login", { email, password });

      const { id, name, token } = response.data.data;
      console.log(response);
      setCookie(undefined, "@appPedidos.token", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      setUser({
        id,
        name,
        token,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      toast.success("Logadoo com sucesso", {
        position: "top-center",
      });

      Router.push("/home");
    } catch (error) {
      toast.error("Erro ao acessar", {
        position: "top-center",
      });
      console.log("error ao acessar", error);
    }
  };

  const createReceita = async ({
    title,
    description,
    ingredients,
    preparation,
    movie,
  }: PropsReceita) => {
    const response = await api.post("/create", {
      title,
      description,
      ingredient: ingredients,
      preparation_mode: preparation,
      movie_link: movie,
      userId: "65bdacb8bd9995dee558bf9c",
    });

    console.log(response)
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, SignOut, createReceita }}>
      {children}
    </AuthContext.Provider>
  );
};
