import { Header } from "@/components/Header";
import Image from "next/image";
import imageMain from "../../../public/feijoada.png";
import { FaSearch } from "react-icons/fa";
import { Copywhite } from "@/components/Copywhite";
import { ModalOrder } from "@/components/Modal";
import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Header />
      <div className="mt-[150px] sm:mt-[200px] flex flex-col-reverse pb-[3.5rem] sm:flex-row items-center sm:px-[250px] px-3 sm:justify-between">
        <div className="flex flex-col w-full sm:text-left">
          <h1 className="text-[2rem] sm:text-[3rem] leading-[4rem]">Receitas do chefe</h1>
          <h4 className="text-[1.3rem] text-gray-500">
            Receitas enviadas pelos visitantes
          </h4>
          <div className="mt-8 flex gap-8 items-center">
            <h4 className="text-gray-700 text-[1.5rem]">
              Cadastre a sua receita já
            </h4>
            <Link href="/criarReceita" className="bg-blue-600 text-white px-[3rem] py-2 text-[1rem] rounded-md">
              Cadastre
            </Link>
          </div>
        </div>
        <div className="mt-8 sm:mt-0">
          <Image
            className="rounded-md"
            src={imageMain}
            width={450}
            alt="imagem feijoada"
          />
        </div>
      </div>
      <div className="px-[20px] py-10 text-center">
        <div className="flex gap-4 justify-center mb-6">
          <input
            className="rounded-md bg-blue-600 text-white placeholder-slate-200 outline-none px-6 py-3 w-full sm:max-w-[400px]"
            placeholder="Busque a receita"
          />
          <button className="rounded-md bg-blue-600 px-4 py-3 text-white">
            <FaSearch />
          </button>
        </div>
        <div className="flex flex-col gap-4 mb-10">
          <div className="rounded-md flex items-center justify-between bg-blue-600 text-white px-4 max-w-[470px] w-full py-3 mx-auto">
            <h4>Strogonoff de frango</h4>
            <button
              onClick={() => setModal(true)}
              className="bg-blue-500 py-1 px-3 rounded-md"
            >
              Veja a receita
            </button>
          </div>
          <div className="rounded-md flex items-center justify-between bg-blue-600 text-white px-4 py-3 max-w-[470px] w-full mx-auto">
            <h4>Strogonoff de frango</h4>
            <button
              onClick={() => setModal(true)}
              className="bg-blue-500 py-1 px-3 rounded-md"
            >
              Veja a receita
            </button>
          </div>
          <div className="rounded-md flex items-center justify-between bg-blue-600 text-white px-4 py-3 max-w-[470px] w-full mx-auto">
            <h4>Strogonoff de frango</h4>
            <button
              onClick={() => setModal(true)}
              className="bg-blue-500 py-1 px-3 rounded-md"
            >
              Veja a receita
            </button>
          </div>
        </div>
        <ModalOrder modal={modal} setModal={setModal} />
      </div>
      <Copywhite />
    </div>
  );
};

export default Home;