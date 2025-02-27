import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const NavBarStateContext = createContext();

export function NavBarStateProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBarStateContext.Provider value={{ isOpen, handleMenuToggle }}>
      {children}
    </NavBarStateContext.Provider>
  );
}

NavBarStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
