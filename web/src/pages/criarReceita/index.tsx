import { Copywhite } from "@/components/Copywhite";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Input2 } from "@/components/Input2";
import { FormEvent, useState } from "react";
import { PiBowlFood } from "react-icons/pi";

const CriarReceita = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparartion, setPreparation] = useState("");
  const [movie, setMovie] = useState("");

  const handleCreate = (event: FormEvent) => {};

  return (
    <div>
      <Header />
      <div className="mt-[180px]">
        <div>
          <h1 className="flex px-2 justify-center gap-4 items-center text-[2rem] sm:text-[2.5rem]">
            Cadastre sua receita <PiBowlFood />
          </h1>
        </div>
        <div>
          <form  className="flex flex-col gap-1 items-center mt-8">
            <Input2
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titulo"
            />
            <Input2
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descrição"
            />
            <Input2
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Ingredientes"
            />
            <Input2
              onChange={(e) => setPreparation(e.target.value)}
              placeholder="Modo de preparo"
            />
            <Input2
              onChange={(e) => setMovie(e.target.value)}
              placeholder="Link do video"
            />
            <button
              onClick={handleCreate}
              className="rounded-md bg-blue-600 text-white w-full px-2 py-[.4rem] max-w-[22rem]"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
      <Copywhite />
    </div>
  );
};

export default CriarReceita;
