import axios, { AxiosError } from "axios";
import { error } from "console";
import { parseCookies } from "nookies";

export const setUpApiClient = (ctx = undefined) => {
  let cookies = parseCookies(ctx);
  const api = axios.create({
    baseURL: "http://localhost:3333",
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

        } else{
            return Promise.reject(new Au)
        }
      }
    }
  );
};
