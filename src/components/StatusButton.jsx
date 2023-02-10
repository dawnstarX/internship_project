import ClearButton from "./StatusButtons/ClearButton";
import DumpButton from "./StatusButtons/DumpButton";
import ReviewButton from "./StatusButtons/ReviewButton";
import PreviousButton from "./StatusButtons/PreviousButton";
import NextButton from "./StatusButtons/NextButton";

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
