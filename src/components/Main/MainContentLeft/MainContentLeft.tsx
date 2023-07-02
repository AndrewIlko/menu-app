import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import MenuElement from "../Menu/MenuElement";
import Menu from "./Menu";

const MainContentLeft = () => {
  // const [menu, setMenu] = useState<Menu[] | null>(null);

  return (
    <>
      <div className="w-[272px] max-h-[calc(100vh-80px)] sticky top-[95px] my-6">
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
