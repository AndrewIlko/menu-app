import { useMemo, useState } from "react";

const useDisable = (
  status: boolean
): [style: string, changeStatus: (status: boolean) => void] => {
  const [isActive, setIsActive] = useState<boolean>(status);

  const btnStyle = useMemo((): string => {
    return !isActive
      ? "bg-[#e0e0e0] text-[#bdbdbd] cursor-not-allowed"
      : "text-[#fff] bg-[#B3202C]";
  }, [isActive]);

  return [btnStyle, setIsActive];
};

export default useDisable;
