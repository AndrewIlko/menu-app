import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import MenuElement from "../Menu/MenuElement";
import { Menu } from "./Menu";
import { useGetMenusQuery } from "../../../rtk/api/menu.api";

const MainContentLeft = () => {
  // const [menu, setMenu] = useState<Menu[] | null>(null);

  return (
    <>
      <div className="max-w-[200px] w-full sticky top-[24px]">
        {/* {menu &&
          menu.map((data: Menu): JSX.Element => {
            return <MenuElement key={nanoid()} data={data} />;
          })} */}
        <Menu />
      </div>
    </>
  );
};

export default MainContentLeft;
