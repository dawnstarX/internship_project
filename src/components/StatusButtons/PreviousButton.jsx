import { useContext } from "react";
import { ques } from "../../Context";

const PreviousButton = () => {
  const { cur, status, option } = useContext(ques);
  const [CUR, setCur] = cur;
  const [STATUS, setStatus] = status;
  const [OPTION, setOption] = option;

  const calculateStatus = function () {
    if (OPTION[CUR]) {
      return 1;
    } else {
      return 2;
    }
  };

  const statusHandler = function () {
    const newSTATUS = STATUS.map((elem, i) => {
      if (i === CUR) {
        return calculateStatus();
      } else {
        return elem;
      }
    });
    setStatus(newSTATUS);
  };

  const NextHandler = function () {
    if (CUR === 1) {
      return;
    } else {
      const newCUR = CUR - 1;
      setCur(newCUR);
    }
  };
  return (
    <button
      className="btn"
      onClick={() => {
        statusHandler();
        NextHandler();
      }}
    >
      PREVIOUS
    </button>
  );
};

export default PreviousButton;
