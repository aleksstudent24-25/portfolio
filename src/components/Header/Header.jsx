import { BiLogoGithub, BiLogoGmail } from "react-icons/bi";

export default function Header() {
  const pageDirects = ["About", "Projects"];
  return (
    <>
      <header className="w-full h-auto bg-cyan-600 flex place-items-center place-content-between p-5 font-outfit">
        <ul className="flex gap-3">
          {pageDirects.map((x) => (
            <button
              key={x}
              className="p-2.5 border-2 border-gray-200 rounded-br-2xl text-gray-200 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer"
            >
              {x}
            </button>
          ))}
        </ul>
        <div className="flex gap-2">
          <a href="mailto:aleksander24sfj@gmail.com" target="_blank">
            <BiLogoGmail className="text-gray-200 bg-gray-800 hover:bg-gray-700 border-2 h-10 w-10 rounded-full"></BiLogoGmail>
          </a>
          <a
            href="https://github.com/aleksstudent24-25?tab=repositories"
            target="_blank"
            className="rounded-full"
          >
            <BiLogoGithub className="text-gray-200 bg-gray-800 hover:bg-gray-700 border-2 h-10 w-10 rounded-full hover:cursor-pointer" />
          </a>
        </div>
      </header>
    </>
  );
}
