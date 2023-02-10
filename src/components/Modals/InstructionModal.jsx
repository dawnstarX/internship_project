import React from "react";
import CommonModal from "./CommonModal";

const InstructionModal = () => {
  return (
    <div className="Common-Modal">
      <CommonModal headerName={{ value: "INSTRUCTIONS" }} />
      <div style={{ display: "flex", marginTop: "5%" }}>
        <ul>
          <li>
            The examination does not require using any paper, pen, pencil and
            calculator.
          </li>
          <li>
            Every student will take the examination on a Laptop/Desktop/Smart
            Phone
          </li>
          <li>
            On computer screen every student will be given objective type type
            Multiple Choice Questions (MCQs).
          </li>
          <li>
            Each student will get questions and answers in different order
            selected randomly from a fixed Question Databank
          </li>
          <li>
            The students just need to click on the Right Choice / Correct option
            from the multiple choices /options given with each question. For
            Multiple Choice Questions, each question has four options, and the
            candidate has to click the appropriate option.
          </li>
          <li>All questions are compulsory and each carries One mark.</li>
          <li>
            The total number of questions, duration of examination, will be
            different based on the course, the detail is available on your
            screen.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InstructionModal;
