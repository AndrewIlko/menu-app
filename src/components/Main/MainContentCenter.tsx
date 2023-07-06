import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Element } from "react-scroll";
import { RootState } from "../../store/store";
import { menu } from "./MainContentLeft/Menu";
import { nanoid } from "@reduxjs/toolkit";
import noImage from "../../assets/no-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import useTopDistance from "../../custom-hooks/useTopDistance";
import { globalActions } from "../../slices/globalSlice";

type MenuCategoryContentProps = {
  data: { category_name: string; options: any[]; id: string };
};

const MenuCategoryContent = (props: MenuCategoryContentProps) => {
  const {
    data: { category_name, options, id },
  } = props;

  const { setSelectedCategory } = globalActions;
  const dispatch = useDispatch();

  const [categoryTitleRef, topDistance] = useTopDistance();
  useEffect(() => {
    if (topDistance) {
      if (topDistance <= 250) {
        dispatch(setSelectedCategory(id));
      }
    }
  }, [topDistance]);

  console.log(topDistance);
  return (
    <>
      <div className="mt-[15px] first:mt-[0]" key={nanoid()}>
        <div ref={categoryTitleRef}>
          <h1 className="text-[24px] font-[700]">{category_name}</h1>
        </div>
        <div className="flex flex-col gap-[15px] mt-[15px]">
          {options.map((option: any) => {
            const { image, name, description, likes } = option;
            return (
              <div
                className="w-full border rounded-[6px] p-[15px]"
                key={nanoid()}
              >
                <div className="flex gap-[25px]">
                  <div className="flex flex-col flex-1">
                    <h1 className="text-[21px]">{name}</h1>
                    <p className="text-[14px] mt-[15px]">{description}</p>
                    <div className="w-full flex justify-start mt-[15px]">
                      <button className="flex items-center gap-[15px] px-[10px] py-[5px] border rounded-[6px]">
                        <FontAwesomeIcon icon={faHeart} />
                        <span className="mt-[2px]">{likes}</span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="w-[200px] h-[125px] rounded-[4px] bg-center bg-cover"
                    style={{
                      backgroundImage: `url(${image !== "" ? noImage : image})`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const MainContentCenter = () => {
  const { selected } = useSelector((state: RootState) => state.page.menu);
  // const [dishes, setDishes] = useState<DishesCategory[] | null>(null);

  return (
    <>
      <div className="w-full flex flex-1 flex-col min-w-[500px]">
        {menu[0].categories.map((menuEl: any) => {
          const { id } = menuEl;
          return <MenuCategoryContent key={id} data={menuEl} />;
        })}
      </div>
    </>
  );
};

export default MainContentCenter;
