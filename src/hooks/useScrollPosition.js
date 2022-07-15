import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // function that is called when the scroll position changes
    const updateScrollPosition = () => {
      // update the state every time the window is scrolled with the current scroll position
      setScrollPosition(window.scrollY);
    };

    // add the scroll event listener {listens for the scroll event}
    window.addEventListener("scroll", updateScrollPosition);

    updateScrollPosition();

    // return a function that removes the event listener
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);
  return scrollPosition;
};

export default useScrollPosition;
