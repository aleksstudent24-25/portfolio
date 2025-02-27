import { BiLogoGithub, BiLogoGmail } from "react-icons/bi";
import { NavBar } from "./NavBar";
import { useState } from "react";
import HamburgerBar from "./HamburgerBar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full h-auto bg-cyan-600 flex place-items-center place-content-between p-5 font-outfit">
        <NavBar />
        <HamburgerBar handleMenuToggle={handleMenuToggle} isOpen={isOpen} />
        <div className="flex gap-2">
          <a href="mailto:aleksander24sfj@gmail.com" target="_blank">
            <BiLogoGmail className="text-gray-200 bg-gray-800 hover:bg-gray-700 border-2 h-12 w-12 rounded-full"></BiLogoGmail>
          </a>
          <a
            href="https://github.com/aleksstudent24-25?tab=repositories"
            target="_blank"
            className="rounded-full"
          >
            <BiLogoGithub className="text-gray-200 bg-gray-800 hover:bg-gray-700 border-2 h-12 w-12 rounded-full hover:cursor-pointer" />
          </a>
        </div>
      </header>
    </>
  );
}
