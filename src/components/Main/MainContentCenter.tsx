import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Element } from "react-scroll";
import { RootState } from "../../store/store";
import uuid from "react-uuid";

import { DishesCategory } from "../../../server";

const MainContentCenter = () => {
  const { selected } = useSelector((state: RootState) => state.page.menu);
  const [dishes, setDishes] = useState<DishesCategory[] | null>(null);
  useEffect(() => {
    if (selected) {
      (async () => {
        await axios
          .get(`http://localhost:8000/categories/${selected}`)
          .then((res) => res.data)
          .then((res) => {
            setDishes(res);
          });
      })();
    }
  }, [selected]);
  return (
    <>
      <div className="w-full flex flex-1 flex-col justify-end">
        {dishes &&
          dishes.map(({ categoryName }) => {
            return (
              <div key={uuid()}>
                <Element name={categoryName}>{categoryName}</Element>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MainContentCenter;
