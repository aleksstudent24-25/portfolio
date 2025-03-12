import { GiHamburgerMenu } from "react-icons/gi";
import { MENU_ITEMS } from "../../assets/data/menu_list.json";
import { NavBarStateContext } from "../../contexts/NavBarStateContext";
import { useContext } from "react";

export default function HamburgerBar() {
  const { isOpen, handleMenuToggle } = useContext(NavBarStateContext);
  return (
    <>
      <div className="relative">
        <GiHamburgerMenu
          onClick={handleMenuToggle}
          className="p-1 text-gray-200 bg-gray-800 hover:bg-gray-700 border-2 h-12 w-12 rounded-md hover:cursor-pointer md:hidden flex"
        ></GiHamburgerMenu>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } flex flex-col absolute`}
        >
          {MENU_ITEMS?.map((x, i) => (
            <a href={x.ref} key={x.name + i} className={`md:hidden`}>
              <button
                onClick={handleMenuToggle}
                className={`mt-${
                  12 * i
                } p-2.5 border-2 border-gray-200 rounded-md text-gray-200 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer w-25`}
              >
                {x.name}
              </button>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
