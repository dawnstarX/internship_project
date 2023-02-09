import ClearButton from "./ClearButton";
import DumpButton from "./DumpButton";
import ReviewButton from "./ReviewButton";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";

const StatusButton = () => {
  return (
    <div className="subjects">
      <ClearButton />
      <ReviewButton />
      <DumpButton />
      <PreviousButton />
      <NextButton />
    </div>
  );
};

export default StatusButton;
