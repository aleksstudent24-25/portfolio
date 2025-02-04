import { BiLogoGithub } from "react-icons/bi";

export default function Header() {
  const pageDirects = ["About", "Projects"];
  return (
    <>
      <header className="w-full h-auto bg-gray-800 flex place-items-center place-content-between p-5 font-outfit">
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
        <BiLogoGithub className="h-12 w-12 border-2 bg-gray-200 border-gray-900 rounded-full" />
      </header>
    </>
  );
}
