import { useState } from "react";
import "../styles/Modalbutton.css";
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
    <SubmittModal toggleModal={toggleModal} />,
  ];
  return (
    <>
      <button className="modalButtons" onClick={toggleModal}>
        {buttonProp.value}
      </button>
      {isOpen && (
        <div className="Modal-background" onClick={toggleModal}>
          <div className="Modal-box" onClick={(e) => e.stopPropagation()}>
            {modalArray[buttonProp.num]}
          </div>
        </div>
      )}
    </>
  );
};

export default Modalbutton;
