import { Copywhite } from "@/components/Copywhite";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Input2 } from "@/components/Input2";
import { PiBowlFood } from "react-icons/pi";

const CriarReceita = () => {
  return (
    <div>
      <Header />
      <div className="px-[250px] mt-[200px]">
        <div>
          <h1 className="flex justify-center gap-4 items-center text-[2.5rem]">
            Cadastre sua receita <PiBowlFood />
          </h1>
        </div>
        <div className="flex flex-col gap-1 items-center mt-8">
          <Input2 placeholder="Titulo" />
          <Input2 placeholder="Descrição" />
          <Input2 placeholder="Ingredientes" />
          <Input2 placeholder="Modo de preparo" />
          <Input2 placeholder="Link do video" />
          <button className="rounded-md bg-blue-600 text-white w-full px-2 py-[.4rem] max-w-[22rem]">Cadastrar</button>
        </div>
      </div>
      <Copywhite />
    </div>
  );
};

export default CriarReceita;
