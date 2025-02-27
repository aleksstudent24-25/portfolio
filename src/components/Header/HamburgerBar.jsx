import { GiHamburgerMenu } from "react-icons/gi";
import { MENU_ITEMS } from "../../assets/data/menu_list.json";

export default function HamburgerBar({ isOpen, handleMenuToggle }) {
  return (
    <>
      <div>
        <GiHamburgerMenu
          onClick={handleMenuToggle}
          className="p-1 text-gray-200 bg-gray-800 hover:bg-gray-700 border-2 h-12 w-12 rounded-md hover:cursor-pointer md:hidden flex"
        ></GiHamburgerMenu>
        <div className={`${isOpen ? "" : "hidden"} grid grid-flow-row`}>
          {MENU_ITEMS?.map((x, i) => (
            <button
              key={x.name + i}
              onClick={handleMenuToggle}
              className={`fixed mt-${
                12 * i
              } p-2.5 border-2 border-gray-200 rounded-md text-gray-200 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer w-25`}
            >
              <a href={x.ref}>{x.name}</a>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
