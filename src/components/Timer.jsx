import { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(10800000); // 3 hours in milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600000);
  const minutes = Math.floor((timeLeft % 3600000) / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  return (
    <div>
      {hours}:{minutes}:{seconds}
    </div>
  );
}

export default Timer;
