import TextTransition, { presets } from "react-text-transition";
import { useTransitionCounter } from "../../hooks/useTransitionCounter/useTransitionCounter";

export default function Hero() {
  const { text, color } = useTransitionCounter(3000);
  return (
    <>
      <section className="h-90 tracking-widest p-20 content-end items-bottom text-center bg-gradient-to-b from-cyan-600 to-fuchsia-500">
        <h1 className="text-3xl flex text-white">
          FULLSTACK DEVELOPER MAKING&nbsp;{" "}
          <TextTransition className={`${color} heroTitle font-semibold`} springConfig={presets.gentle}>
            {text}&nbsp;
          </TextTransition>{" "}
          WEBSITES
        </h1>
      </section>
    </>
  );
}
