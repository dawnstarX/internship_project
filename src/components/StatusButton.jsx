import { useContext } from "react";
import { ques } from "../Context";

const StatusButton = () => {
  const { cur, status } = useContext(ques);
  const [CUR, setCur] = cur;
  const [STATUS, setStatus] = status;

  const statusHandler = function (e) {
    console.log(e.target.value);
    const newSTATUS = STATUS.map((elem, i) => {
      if (i === CUR) {
        return e.target.value;
      } else {
        return elem;
      }
    });
    setStatus(newSTATUS);
  };
  return (
    <div>
      <button
        value={0}
        onClick={(e) => {
          statusHandler(e);
        }}
      >
        0
      </button>
      <button
        value={1}
        onClick={(e) => {
          statusHandler(e);
        }}
      >
        1
      </button>
      <button
        value={2}
        onClick={(e) => {
          statusHandler(e);
        }}
      >
        2
      </button>
      <button
        value={3}
        onClick={(e) => {
          statusHandler(e);
        }}
      >
        3
      </button>
      <button
        value={4}
        onClick={(e) => {
          statusHandler(e);
        }}
      >
        4
      </button>
      <button
        value={5}
        onClick={(e) => {
          statusHandler(e);
        }}
      >
        5
      </button>
    </div>
  );
};

export default StatusButton;
