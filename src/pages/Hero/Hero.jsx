import TextTransition, { presets } from "react-text-transition";
import { useTransitionCounter } from "../../hooks/useTransitionCounter/useTransitionCounter";

export default function Hero() {
  const { text, color } = useTransitionCounter(3000);
  return (
    <>
      <section className="h-screen tracking-widest p-20 md:pt-40 md:pb-40 content-center items-bottom text-center bg-gradient-to-b from-cyan-600 to-fuchsia-500">
        <div className="text-3xl text-white">
          <h1 className="flex flex-col md:flex-row justify-center">
            <span>FULLSTACK</span>
            <p className="sm:hidden md:block">&nbsp;</p>
            <span>DEVELOPER</span>
            <p className="sm:hidden md:block">&nbsp;</p>
          </h1>
          <h1 className="flex flex-col md:flex-row justify-center">
            MAKING
            <p className="sm:hidden md:block">&nbsp;</p>
            <TextTransition
              className={`${color} title font-semibold justify-center`}
              springConfig={presets.gentle}
            >
              {text}
            </TextTransition>
            <p className="sm:hidden md:block">&nbsp;</p>
            WEBSITES
          </h1>
        </div>
      </section>
    </>
  );
}
