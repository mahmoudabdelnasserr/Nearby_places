import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTimer, setRemainingTimer] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("OInterval");
      setRemainingTimer((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTimer} max={timer} />;
}
