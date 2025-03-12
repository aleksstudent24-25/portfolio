import { MENU_ITEMS } from "../../assets/data/menu_list.json";

export const NavBar = () => {
  return (
    <ul className="hidden md:flex gap-3">
      {MENU_ITEMS?.map((x, i) => (
        <a className="" href={x.ref} key={x.name + i}>
          <button className="p-2.5 border-2 border-gray-200 rounded-br-2xl text-gray-200 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer">
            {x.name}
          </button>
        </a>
      ))}
    </ul>
  );
};
