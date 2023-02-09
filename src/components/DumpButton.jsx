import { useContext } from "react";
import { ques } from "../Context";

const DumpButton = () => {
  const { cur, status } = useContext(ques);
  const [CUR, setCur] = cur;
  const [STATUS, setStatus] = status;

  const statusHandler = function () {
    const newSTATUS = STATUS.map((elem, i) => {
      if (i === CUR) {
        return 5;
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
      DUMP
    </button>
  );
};

export default DumpButton;
