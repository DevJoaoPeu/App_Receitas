import Modal from "react-modal";

export const ModalOrder = () => {
  const customStyle = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
      Hello
    </Modal>
  );
};
