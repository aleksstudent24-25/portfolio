import { useEffect, useState } from "react";

export const useTransitionCounter = (interval) => {
  const [index, setIndex] = useState(0);

  const texts = [
    "CREATIVE",
    "INTUITIVE",
    "ROBUST",
    "VARIED",
    "ENTERTAINING",
    "INTERACTIVE",
  ];

  const colors = [
    "text-amber-300",
    "text-emerald-300",
    "text-red-300",
    "text-sky-300",
  ];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      interval
    );
    return () => clearTimeout(intervalId);
  }, [interval, setIndex]);

  return {
    text: texts[index % texts.length],
    color: colors[index % colors.length],
  };
};
