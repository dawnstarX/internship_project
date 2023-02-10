import { useContext } from "react";
import { ques } from "../../Context";

const ClearButton = () => {
  const { cur, option } = useContext(ques);
  const [CUR, setCur] = cur;

  const [OPTION, setOption] = option;

  const clearResponseHandler = function () {
    const newOPTION = OPTION.map((elem, i) => {
      if (i === CUR) {
        return 0;
      } else {
        return elem;
      }
    });
    setOption(newOPTION);
  };
  return (
    <button className="btn" value={0} onClick={clearResponseHandler}>
      CLEAR RESPONSE
    </button>
  );
};

export default ClearButton;
