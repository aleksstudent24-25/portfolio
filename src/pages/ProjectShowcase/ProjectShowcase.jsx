import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PROJECT_ITEMS } from "../../assets/data/project_list.json";
import { useState } from "react";

export default function ProjectShowcase() {
  const [index, setIndex] = useState(0);
  const project = PROJECT_ITEMS[index];

  const nextIndex = () => {
    if (index < PROJECT_ITEMS.length - 1) setIndex((index) => index + 1);
  };

  const prevIndex = () => {
    if (index > 0) setIndex((index) => index - 1);
  };

  console.log(PROJECT_ITEMS);

  return (
    <>
      <section className="h-screen flex justify-center md:h-screen tracking-wide p-20 bg-gradient-to-bl from-fuchsia-300 via-blue-300 to-fuchsia-400">
        <div className="md:h-full w-[372px] flex flex-row items-center justify-center bg-gray-800 border-2 border-gray-100 rounded-xl text-gray-100 font-outfit">
          <button
            className="hover:cursor-pointer hover:bg-gray-700 h-full rounded-l-lg p-1"
            id="arrowLeft"
            onClick={prevIndex}
          >
            <FaArrowLeft />
          </button>
          <div className="flex flex-col w-[300px] text-center">
            <div
              id="container"
              className="flex flex-col items-center"
            >
              <a href={project.ref} target="_blank">
                <h2 className="text-xl text-amber-300">{project.title}</h2>
                <p>{project.desc}</p>
              </a>
            </div>
          </div>
          {/* {PROJECT_ITEMS?.map((project) => {
            return (
              <>
                <div id="container" className="flex flex-col">
                  <h2>{project.title}</h2>
                  <img src={project.img} alt="" />
                  <p>{project.desc}</p>
                </div>
              </>
            );
          })} */}
          <button
            id="arrowRight"
            className="hover:cursor-pointer hover:bg-gray-700 h-full rounded-r-lg p-1"
            onClick={nextIndex}
          >
            <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  );
}
