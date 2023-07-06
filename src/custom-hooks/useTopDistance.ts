import { useEffect, useRef, useState } from "react";

const useTopDistance = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [topDistance, setTopDistance] = useState<number | undefined>(undefined);

  const calculateTopDistance = () => {
    if (elementRef.current) {
      const { top } = elementRef.current.getBoundingClientRect();
      const distanceFromTop = top;
      setTopDistance(distanceFromTop);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateTopDistance);
    return () => {
      window.removeEventListener("scroll", calculateTopDistance);
    };
  }, []);
  return [elementRef, topDistance] as const;
};

export default useTopDistance;
