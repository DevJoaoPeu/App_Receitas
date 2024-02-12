import { AuthTokenError } from "@/services/errors";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { parseCookies, destroyCookie } from "nookies";

export function canSSRAuth<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<{}>> => {
    const cookies = parseCookies(ctx);

    const token = cookies["@appPedidos.token"];

    if (!token) {
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
      if (error instanceof AuthTokenError) {
        destroyCookie(ctx, "@appPedidos.token");

        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }

      return {
        props: {
          
        }, 
      };
    }
  };
}