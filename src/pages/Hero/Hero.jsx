import TextTransition, { presets } from "react-text-transition";
import { useTransitionCounter } from "../../hooks/useTransitionCounter/useTransitionCounter";

const text = ["CREATIVE", "FUN", "VARIED", "ENTERTAINING"];

export default function Hero() {
  const i = useTransitionCounter(3000);
  return (
    <>
      <section className="top-0 h-screen tracking-widest p-20 bg-gradient-to-tl content-center items-center text-center from-sky-400 to-fuchsia-500">
        <h1 className="text-3xl heroTitle w-auto flex text-center">
          FULLSTACK DEVELOPER MAKING&nbsp;{" "}
          <TextTransition className="" springConfig={presets.gentle}>
            {`${text[i % text.length]}`}&nbsp;
          </TextTransition>{" "}
          WEBSITES
        </h1>
      </section>
    </>
  );
}
