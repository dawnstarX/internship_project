import { useState } from "react";
import ProfileModal from "./Modals/ProfileModal";
import InstructionModal from "./Modals/InstructionModal";
import QuestionModal from "./Modals/QuestionModal";
import SubmittModal from "./Modals/SubmittModal";

const Modalbutton = ({ buttonProp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const modalArray = [
    <ProfileModal />,
    <InstructionModal />,
    <QuestionModal />,
    <SubmittModal />,
  ];
  return (
    <>
      <button className="modalButtons" onClick={toggleModal}>
        {buttonProp.value}
      </button>
      {isOpen && (
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={toggleModal}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {modalArray[buttonProp.num]}
          </div>
        </div>
      )}
    </>
  );
};

export default Modalbutton;
