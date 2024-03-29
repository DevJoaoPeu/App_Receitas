import Modal from "react-modal";
import { FiX } from "react-icons/fi";

interface PropsModal {
  modal: boolean;
  setModal: (props: boolean) => void;
  item: PropsReceita;
}

interface PropsReceita {
  title: string;
  description: string;
  ingredient: string;
  preparation_mode: string;
  movie_link: string;
}

export const ModalOrder = ({ modal, setModal, item }: PropsModal) => {
  const ArrayIngredients = item.ingredient.split(",");

  let videoId = item.movie_link.split("be/")[1];

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
      padding: "25px",
      maxWidth: "90%",
      maxHeight: "90%",
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
      <div className="flex flex-col sm:flex-row gap-10 items-center overflow-y-auto">
        <div className="sm:w-1/2 sm:flex sm:gap-9">
          <div className=" sm:w-auto">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
          <div className="px-5 py-5">
            <ul className="list-disc">
              {ArrayIngredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sm:w-1/2">
          <div className="text-center">
            <h1 className="text-xl font-bold mb-3"> {item.title} </h1>
            <h4 className="text-sm sm:text-[17px]">{item.description}</h4>
          </div>
          <div className="mt-5">
            <p className="text-sm sm:text-[17px]">{item.preparation_mode}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
