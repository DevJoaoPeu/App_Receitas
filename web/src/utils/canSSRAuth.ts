import { PropsCookie } from "@/context/AuthContext";
import { AuthTokenError } from "@/services/errors";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { parseCookies, destroyCookie } from "nookies";

export function canSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    const cookie: PropsCookie = JSON.parse(cookies["@appPedidos.token"])

    if (!cookie.token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (error) {
      // if (error instanceof AuthTokenError) {
      //   destroyCookie(ctx, "@appPedidos.token");

      //   return {
      //     redirect: {
      //       destination: "/",
      //       permanent: false,
      //     },
      //   };
      // }
      console.log(error)
    }
  };
}
