import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./errors";
import { SignOut } from "@/context/AuthContext";

export const setUpApiClient = (ctx = undefined) => {
  let cookies = parseCookies(ctx);
  const api = axios.create({
    baseURL: "http://localhost:3333", // "https://deploy-pedidos.vercel.app/", 
    headers: {
      Authorization: `Bearer ${cookies["@appPedidos.token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        //
        if(typeof window !== undefined){
           SignOut()
        } else{
            return Promise.reject(new AuthTokenError())
        }
      }
    }
  );
  return api
};
