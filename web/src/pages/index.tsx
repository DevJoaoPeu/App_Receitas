import Image from "next/image";
import logo from "../../public/logo.png"
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Copywhite } from "@/components/Copywhite";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <Image className="mb-8" src={logo} width={170} alt="logo" />
        <div className="flex flex-col max-w-[470px] gap-1 w-full">
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Button>Login</Button>
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
