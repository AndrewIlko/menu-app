import { useEffect, useState } from "react";
import axios from "axios";
import { Menu } from "../../../server/index";
import uuid from "react-uuid";
import MenuElement from "./Menu/MenuElement";

const MainContentLeft = () => {
  const [menu, setMenu] = useState<Menu[] | null>(null);
  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:8000/menu")
        .then((res) => res.data)
        .then((res) => {
          setMenu(res);
        });
    })();
  }, []);
  return (
    <>
      <div className="w-[272px] max-h-[calc(100vh-80px)] sticky top-20 my-6">
        {menu &&
          menu.map((data: Menu): JSX.Element => {
            return <MenuElement key={uuid()} data={data} />;
          })}
      </div>
    </>
  );
};

export default MainContentLeft;
