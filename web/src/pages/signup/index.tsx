import logo from "../../../public/logo.png";
import { Button } from "@/components/Button";
import { Copywhite } from "@/components/Copywhite";
import { Input } from "@/components/Input";
import Image from "next/image";

const Signup = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <Image src={logo} className="mb-8" width={170} alt="logo" />
        <div className="flex flex-col max-w-[470px] gap-1 w-full">
          <Input type="text" placeholder="Nome" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Button>Login</Button>
        </div>
        <span className="m-8">
          Já tem conta?{" "}
          <a className="underline" href="/">
            Faça login
          </a>
        </span>
      </div>
      <Copywhite />
    </div>
  );
};

export default Signup;
