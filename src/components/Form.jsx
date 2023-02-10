import React, { useContext } from "react";
import "../styles/Form.css";
import { ques } from "../Context";
import questions from "../questions.js";

const Form = () => {
  const { cur, option } = useContext(ques);
  const [CUR] = cur;

  const [OPTION, setOption] = option;

  const optionArray = [1, 2, 3, 4];

  const changeHandler = function (e) {
    const newOPTION = OPTION.map((elem, i) => {
      if (i === CUR) {
        return +e.target.value;
      } else {
        return elem;
      }
    });
    setOption(newOPTION);
  };
  return (
    <form className="formElement">
      <div className="question-box">
        <img className="questionImg" src={questions[CUR][0]} alt="Question1" />
      </div>
      {optionArray.map((ele, i) => {
        return (
          <div key={ele} className="form-box">
            <input
              className="radioButton"
              type="radio"
              name="question"
              value={ele}
              checked={OPTION[CUR] === ele}
              onChange={(e) => changeHandler(e)}
            />
            <img
              className="optionImg"
              src={questions[CUR][1][i]}
              alt="option1"
            />
            <br />
          </div>
        );
      })}
    </form>
  );
};

export default Form;
