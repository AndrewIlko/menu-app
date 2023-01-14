import { Menu } from "../../../../server";
import uuid from "react-uuid";
import MenuOption from "./MenuOption";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { globalActions } from "../../../slices/globalSlice";

const MenuElement = ({ data: { name, options } }: { data: Menu }) => {
  const dispatch = useAppDispatch();
  const { selected } = useSelector((state: RootState) => state.page.menu);
  const { setSelectedMenu } = globalActions;
  return (
    <>
      <div className="">
        <div
          className={`font-bold text-lg cursor-pointer ${
            selected === name && "text-[#B3202C]"
          }`}
          onClick={() => {
            dispatch(setSelectedMenu(name));
          }}
        >
          {name}
        </div>
        <ul
          className={`flex flex-col overflow-hidden transition-all duration-200 h-0 ${
            selected === name && `h-[${options.length * 36}px]`
          }`}
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
