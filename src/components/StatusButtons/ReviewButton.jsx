import { useContext } from "react";
import { ques } from "../../Context";

const ReviewButton = () => {
  const { cur, status, option } = useContext(ques);
  const [CUR, setCur] = cur;
  const [STATUS, setStatus] = status;
  const [OPTION, setOption] = option;

  const calculateStatus = function () {
    if (OPTION[CUR]) {
      return 3;
    } else {
      return 4;
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
    if (CUR === 10) {
      return;
    } else {
      const newCUR = CUR + 1;
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
      REVIEW
    </button>
  );
};

export default ReviewButton;
