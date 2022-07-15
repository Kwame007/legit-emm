import React, { createContext, useState } from "react";

export const context = createContext({
  isShowing: false,
  toggleIsShowing: () => {},
});

const ContextProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  // close mobile navigation
  const toggleMobileNav = () => {
    setIsShowing(!isShowing);
    console.log(isShowing);
  };
  return (
    <context.Provider value={{ isShowing, toggleIsShowing: toggleMobileNav }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
