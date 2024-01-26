import Image from "next/image";
import Modal from "react-modal";
import logo from "../../../public/feijoada.png";
import { FiX } from "react-icons/fi";

interface PropsModal {
  modal: boolean;
  setModal: (props: boolean) => void;
}

export const ModalOrder = ({ modal, setModal }: PropsModal) => {
  const customStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      padding: "40px",
      maxWidth: "90%"
    },
  };

  return (
    <Modal isOpen={modal} style={customStyle}>
      <button
        onClick={() => setModal(false)}
        className="absolute top-3 right-3 text-red-500 text-xl"
      >
        <FiX />
      </button>
      <div className="flex flex-col sm:flex-row gap-10 items-center">
        <div className="sm:w-1/2 sm:flex sm:gap-9">
          <div className="w-full sm:w-auto">
            <Image src={logo} alt="logo" width={300} height={200} />
          </div>
          <div className="px-5 py-5">
            <ul className="list-disc">
              <li>Feijão</li>
              <li>Alho</li>
              <li>Cebola</li>
              <li>Coentro</li>
              <li>Folha de louro</li>
              <li>Linguiça</li>
            </ul>
          </div>
        </div>
        <div className="sm:w-1/2">
          <div className="text-center">
            <h1 className="text-xl font-bold mb-3">Strogonoff de frango</h1>
            <h4 className="text-sm sm:text-[17px]">
              Strogonoff de frango cremoso para toda a família, com poucos
              ingredientes e um ótimo sabor!
            </h4>
          </div>
          <div className="mt-5">
            <p className="text-sm sm:text-[17px]">
              Modo de preparo: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ac feugiat sed lectus vestibulum mattis
              ullamcorper velit sed. Sagittis eu volutpat odio facilisis mauris.
              Pharetra diam sit amet nisl suscipit adipiscing. Turpis in eu mi
              bibendum neque. Euismod elementum nisi quis eleifend quam
              adipiscing vitae proin.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};