import { useEffect, useState } from "react";

export const useTransitionCounter = (interval) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      interval
    );
    return () => clearTimeout(intervalId);
  }, [interval, setIndex]);

  return index;
};
