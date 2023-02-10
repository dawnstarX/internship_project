import { useContext } from "react";
import { ques } from "../../Context";
import CommonModal from "./CommonModal";

const SubmittModal = ({ toggleModal }) => {
  const { status } = useContext(ques);
  const [STATUS, setStatus] = status;
  const statusArray = [
    "Answered",
    "Not Answered",
    "Review+Answer",
    "Review-Answer",
    "Dump",
    "No Visit",
  ];
  const array = [0, 1, 2, 3, 4, 5];
  const count = function (index) {
    const nums = index === 5 ? 0 : index + 1;
    return STATUS.reduce((total, x) => total + (x === nums), 0);
  };
  const num = array.map((e) => {
    return count(e);
  });
  return (
    <div className="Common-Modal">
      <CommonModal headerName={{ value: "SUBMIT" }} />
      <div style={{ marginTop: "5%" }}>
        <h2>You Have :</h2>
        <br />

        {statusArray.map((e, i) => {
          return (
            <div key={e}>
              <h3>{`${num[i]} : ${e}`}</h3>
              <br />
            </div>
          );
        })}

        <button
          className="btn"
          style={{ marginLeft: "40%" }}
          onClick={toggleModal}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubmittModal;
