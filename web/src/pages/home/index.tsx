import { Header } from "@/components/Header";
import Image from "next/image";
import imageMain from "../../../public/feijoada.png"
import { FaSearch } from "react-icons/fa";
import { Copywhite } from "@/components/Copywhite";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="border-b-2 mt-[200px] pb-[3.5rem] px-[250px] flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-[3.5rem] leading-[4rem]">Receitas do chefe</h1>
          <h4 className="text-[1.5rem] text-gray-500">Receitas enviadas pelos visitantes</h4>
          <div className="mt-8 flex gap-8 items-center">
            <h4 className="text-gray-60000 text-[1.5rem]">Cadastre a sua receita já</h4>
            <button className="bg-blue-600 text-white px-[3rem] py-2 text-[1.2rem] rounded-md">Cadastre</button>
          </div>
        </div>
        <Image className="rounded-md" width={500} src={imageMain} alt="imagem feijoada" />
      </div>
      <div className="flex flex-col px-[250px] py-10 text-center">
        <div className="flex gap-8 justify-center mb-10">
          <input className="rounded-md bg-blue-600 text-white placeholder-slate-200 outline-none px-10 py-2 w-full max-w-[35rem]" placeholder="Busque a receita"/>
          <button className="rounded-md bg-blue-600 px-6 text-white"><FaSearch /></button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-md items-center flex max-w-[41rem] w-full justify-between  bg-blue-600 text-white px-5 py-3 m-auto">
            <h4>Strogonoff de frango</h4>
            <button className="bg-blue-500 py-1 px-4 rounded-md">Veja a receita</button>
          </div>
          <div className="rounded-md items-center flex max-w-[41rem] w-full justify-between  bg-blue-600 text-white px-5 py-3 m-auto">
            <h4>Strogonoff de frango</h4>
            <button className="bg-blue-500 py-1 px-4 rounded-md">Veja a receita</button>
          </div>
          <div className="rounded-md items-center flex max-w-[41rem] w-full justify-between  bg-blue-600 text-white px-5 py-3 m-auto">
            <h4>Strogonoff de frango</h4>
            <button className="bg-blue-500 py-1 px-4 rounded-md">Veja a receita</button>
          </div>
        </div>
      </div>
      <Copywhite />
    </div>
  );
};

export default Home;
