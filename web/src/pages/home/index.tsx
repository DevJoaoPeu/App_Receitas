import { Header } from "@/components/Header";
import Image from "next/image";
import imageMain from "../../../public/feijoada.png";
import { FaSearch } from "react-icons/fa";
import { Copywhite } from "@/components/Copywhite";
import { ModalOrder } from "@/components/Modal";
import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/services/apiClient";
import { toast } from "react-toastify";
import { RxUpdate } from "react-icons/rx";

type PropsReceita = {
  title: string;
  description: string;
  ingredient: string;
  preparation_mode: string;
  movie_link: string;
  id: string;
};

const Home = () => {
  const [modal, setModal] = useState(false);

  const [item, setItem] = useState<PropsReceita | undefined>();
  const [response, setResponse] = useState<PropsReceita[]>([]);

  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    const handleReponse = async () => {
      try {
        const response = await api.get("/list");

        const data: PropsReceita[] = response.data.infos;
        setResponse(data);
      } catch (error) {
        console.log(error);
      }
    };
    handleReponse();
  }, []);

  const handleSendModal = async (id: string) => {
    try {
      const response = await api.get(`/list/${id}`);

      if (!response) {
        toast.error("Erro ao carregar as informações", {
          position: "top-center",
        });
        return;
      }

      let data = response.data.infos;
      setItem(data);
      setModal(true);
    } catch (error) {
      toast.error("Erro ao carregar as informações", {
        position: "top-center",
      });
    }
  };

  const handleSearch = () => {
    function removeAccents(str: string) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const filteredResponse = response.filter((item: PropsReceita) =>
    removeAccents(item.title.toLowerCase()).includes(removeAccents(inputSearch.toLowerCase().trim()))
    );
    setResponse(filteredResponse);
    console.log(response);
  };

  const handleUpdate = async () => {
    try {
      const response = await api.get("/list");

      const data: PropsReceita[] = response.data.infos;
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="mt-[150px] sm:mt-[200px] flex flex-col-reverse pb-[3.5rem] sm:flex-row items-center sm:px-[250px] px-3 sm:justify-between">
        <div className="flex flex-col w-full sm:text-left">
          <h1 className="text-[2rem] sm:text-[3rem] leading-[4rem]">
            Receitas do chefe
          </h1>
          <h4 className="text-[1.3rem] text-gray-500">
            Receitas enviadas pelos visitantes
          </h4>
          <div className="mt-8 flex gap-8 items-center">
            <h4 className="text-gray-700 text-[1.5rem]">
              Cadastre a sua receita já
            </h4>
            <Link
              href="/criarReceita"
              className="bg-blue-600 text-white px-[3rem] py-2 text-[1rem] rounded-md"
            >
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
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="rounded-md bg-blue-600 px-4 py-3 text-white"
          >
            <FaSearch />
          </button>
          <button
            onClick={handleUpdate}
            className="rounded-md bg-blue-600 px-4 py-3 text-white"
          >
            <RxUpdate />
          </button>
        </div>
        <div className="flex flex-col gap-4 mb-10">
          {response.map((item, index) => (
            <div
              key={index}
              className="rounded-md flex items-center justify-between bg-blue-600 text-white px-4 max-w-[470px] w-full py-3 mx-auto"
            >
              <h4>{item.title}</h4>
              <button
                onClick={() => handleSendModal(item.id)}
                className="bg-blue-500 py-1 px-3 rounded-md"
              >
                Veja a receita
              </button>
            </div>
          ))}
        </div>
        {item && <ModalOrder item={item} modal={modal} setModal={setModal} />}
      </div>
      <Copywhite />
    </div>
  );
};

export default Home;
