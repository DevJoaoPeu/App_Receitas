import logo from "../../../public/logo.png";
import { Button } from "@/components/Button";
import { Copywhite } from "@/components/Copywhite";
import { Input } from "@/components/Input";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();

    if(!name || !email || !password){
      toast.error("Preecha todos os campos", {
        position: "top-center"
      })
    }

    console.log(name, email, password)
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <Image src={logo} className="mb-8" width={170} alt="logo" />
        <div className="flex flex-col max-w-[470px] gap-1 w-full px-4">
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome"
          />
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
          <Button onClick={handleSignUp}>Login</Button>
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
