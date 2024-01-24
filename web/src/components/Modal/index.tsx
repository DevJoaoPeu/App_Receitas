import Image from "next/image";
import Modal from "react-modal";
import logo from "../../../public/feijoada.png";
import { FiX } from "react-icons/fi";
import { useState } from "react";

export const ModalOrder = () => {

  const customStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      top: "50%",
      bottom: "auto",
      left: "50%",
      right: "auto",
      padding: "30px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
    },
  };

  return (
    <Modal isOpen={false} style={customStyle}>
      <button className="flex float-end text-red-500 text-xl"><FiX /></button>
      <div className="flex justify-between gap-10">
        <div>
          <Image src={logo} alt="logo" className="w-200" />
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
        <div>
          <div className="text-center">
            <h1 className="text-xl font-bold mb-3">Strogonoff de frango</h1>
            <h4 className="text-sm ">
              Strogonoff de frango cremoso para toda a familia, com poucos
              ingredientes e um otimo sabor!
            </h4>
          </div>
          <div className="mt-[50px]">
            <p className="text-sm">
              Modo de preparo: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ac feugiat sed lectus vestibulum mattis
              ullamcorper velit sed. Sagittis eu volutpat odio facilisis mauris.
              Pharetra diam sit amet nisl suscipit adipiscing. Turpis in eu mi
              bibendum neque. Euismod elementum nisi quis eleifend quam
              adipiscing vitae proin.{" "}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
