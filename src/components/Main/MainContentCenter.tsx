import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Element } from "react-scroll";
import { RootState } from "../../store/store";
import { menu } from "./MainContentLeft/Menu";
import { nanoid } from "@reduxjs/toolkit";
import noImage from "../../assets/no-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MainContentCenter = () => {
  const { selected } = useSelector((state: RootState) => state.page.menu);
  // const [dishes, setDishes] = useState<DishesCategory[] | null>(null);

  return (
    <>
      <div className="w-full flex flex-1 flex-col min-w-[500px]">
        {menu[0].categories.map((menuEl: any) => {
          const { category_name, options } = menuEl;
          console.log(options);
          return (
            <div className="mt-[15px] first:mt-[0]" key={nanoid()}>
              <div>
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
                            backgroundImage: `url(${
                              image !== "" ? noImage : image
                            })`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MainContentCenter;
