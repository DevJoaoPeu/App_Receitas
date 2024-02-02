import Image from "next/image";
import logo from "../../public/logo.png";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Copywhite } from "@/components/Copywhite";
import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";
import { canSSRGuest } from "@/utils/canSSrGuest";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (email == "" || password == "") {
      toast.error("Preencha todos os campos", {
        position: "top-center",
      });
      return;
    }

    let data = {
      email,
      password,
    };

    await signIn(data);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <Image className="mb-8" src={logo} width={170} alt="logo" />
        <div className="w-full m-auto max-w-[470px]">
          <form className="flex flex-col  gap-1 px-4">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Senha"
            />
            <Button onClick={handleLogin} type="submit">
              Login
            </Button>
          </form>
        </div>
        <span className="m-8">
          Não tem conta?{" "}
          <a className="underline" href="/signup">
            Cadastre-se
          </a>
        </span>
      </div>
      <Copywhite />
    </div>
  );
};

export default Home;

export const getServerSideProps = canSSRGuest(
  async (ctx) => {
    return {
      props: {},
    };
  }
);
