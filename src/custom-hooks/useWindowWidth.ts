import { useEffect } from "react";
import { useState } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const getWindowWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", getWindowWidth);

    return () => window.removeEventListener("resize", getWindowWidth);
  });

  return width;
};

export default useWindowWidth;
