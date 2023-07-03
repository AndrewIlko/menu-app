import { useState, useRef, useEffect, RefObject } from "react";

type Dimensions = {
  width: number;
  height: number;
};

const useResizeObserver = (): [RefObject<HTMLDivElement>, Dimensions] => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      const handleResize = (entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          console.log(height);
          setDimensions({ width, height });
        }
      };

      if (elementRef.current) {
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(elementRef.current);

        return () => {
          resizeObserver.unobserve(elementRef.current as Element);
        };
      }
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  return [elementRef, dimensions];
};

export default useResizeObserver;
