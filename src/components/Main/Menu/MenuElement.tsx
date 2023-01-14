import { Menu } from "../../../../server";
import uuid from "react-uuid";
import MenuOption from "./MenuOption";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { globalActions } from "../../../slices/globalSlice";
import { useEffect, useRef } from "react";

const MenuElement = ({ data: { name, options } }: { data: Menu }) => {
  const dispatch = useAppDispatch();
  const { selected } = useSelector((state: RootState) => state.page.menu);
  const { setSelectedMenu } = globalActions;

  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (list.current) {
      if (name == selected) {
        list.current.style.height = `${options.length * 36}px`;
      } else list.current.style.height = `0px`;
    }
  }, [selected]);

  return (
    <>
      <div className="flex flex-col">
        <div
          className={`font-bold text-lg cursor-pointer ${
            selected === name && "text-[#B3202C]"
          }`}
          onClick={() => {
            dispatch(setSelectedMenu(name));
          }}
        >
          {((): string => {
            const letters = name.split("");
            letters[0] = letters[0].toUpperCase();
            return letters.join("");
          })()}
        </div>
        <ul
          className={`flex flex-col overflow-hidden transition-all duration-200 h-0}`}
          ref={list}
        >
          {options.map((option) => {
            return <MenuOption key={uuid()}>{option}</MenuOption>;
          })}
        </ul>
      </div>
    </>
  );
};

export default MenuElement;
