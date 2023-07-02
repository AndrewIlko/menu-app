import { nanoid } from "@reduxjs/toolkit";
import { ReactComponent as ArrowDownIcon } from "../../../assets/svg/arrowDown.svg";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../../slices/globalSlice";

export const menu = [
  {
    id: nanoid(),
    menu_name: "Menu",
    categories: [
      {
        id: nanoid(),
        category_name: "🆕 New!",
        options: [
          {
            type: "single",
            id: nanoid(),
            name: "Касаділія з креветкою",
            description:
              "Тортілья,гуакамоле,крем сир,чері,салат айсберг,креветка,вершкове масло,соус кімчі",
            likes: 0,
            default_info: {
              price: 0,
              weight: 0,
            },
          },
          {
            type: "single",
            id: nanoid(),
            name: "Касаділія з креветкою",
            description:
              "Тортілья,гуакамоле,крем сир,чері,салат айсберг,креветка,вершкове масло,соус кімчі",
            likes: 0,
            default_info: {
              price: 0,
              weight: 0,
            },
          },
          {
            type: "single",
            id: nanoid(),
            name: "Касаділія з креветкою",
            description:
              "Тортілья,гуакамоле,крем сир,чері,салат айсберг,креветка,вершкове масло,соус кімчі",
            likes: 0,
            default_info: {
              price: 0,
              weight: 0,
            },
          },
        ],
      },
      {
        id: nanoid(),
        category_name: "🍕 Pizza",
        options: [
          {
            type: "multiple",
            id: nanoid(),
            name: "Касаділія з креветкою",
            description:
              "Тортілья,гуакамоле,крем сир,чері,салат айсберг,креветка,вершкове масло,соус кімчі",
            likes: 0,
            default_info: {
              price: 0,
              weight: 0,
            },
            sizes: {
              S: {
                price: 0,
              },
              M: {
                price: 0,
              },
              L: {
                price: 0,
              },
            },
          },
          {
            id: nanoid(),
            name: "Касаділія з креветкою",
            description:
              "Тортілья,гуакамоле,крем сир,чері,салат айсберг,креветка,вершкове масло,соус кімчі",
            likes: 0,
            default_info: {
              price: 0,
              weight: 0,
            },
            sizes: {
              S: {
                price: 0,
              },
              M: {
                price: 0,
              },
              L: {
                price: 0,
              },
            },
          },
          {
            id: nanoid(),
            name: "Касаділія з креветкою",
            description:
              "Тортілья,гуакамоле,крем сир,чері,салат айсберг,креветка,вершкове масло,соус кімчі",
            likes: 0,
            default_info: {
              price: 0,
              weight: 0,
            },
            sizes: {
              S: {
                price: 0,
              },
              M: {
                price: 0,
              },
              L: {
                price: 0,
              },
            },
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    menu_name: "Dessert",
    categories: [
      {
        id: nanoid(),
        category_name: "",
        options: [
          {
            id: nanoid(),
            image: "",
            name: "Касаділія з креветкою",
            description:
              "Тортілья,гуакамоле,крем сир,чері,салат айсберг,креветка,вершкове масло,соус кімчі",
            likes: 0,
            default_info: {
              price: 0,
              weight: 0,
            },
            sizes: {
              S: {
                price: 0,
              },
              M: {
                price: 0,
              },
              L: {
                price: 0,
              },
            },
          },
        ],
      },
    ],
  },
];

const Menu = () => {
  const { selected } = useSelector((state: any) => state.page.menu);
  const { setSelectedMenu } = globalActions;
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col">
        {menu.map((menuEl: any) => {
          const { id, menu_name, categories } = menuEl;
          const isSelected = selected === id;
          return (
            <div key={nanoid()}>
              <div
                className="flex gap-[16px] cursor-pointer"
                onClick={() => dispatch(setSelectedMenu(id))}
              >
                <ArrowDownIcon
                  className={`${isSelected ? "rotate-0" : "rotate-[-90deg]"}`}
                />
                <h1 className="font-[700]">{menu_name}</h1>
              </div>
              <div className="flex flex-col gap-[10px] ml-[40px] my-[15px]">
                {categories.map((category: any) => {
                  const { category_name } = category;
                  return <div className="cursor-pointer">{category_name}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
