import { nanoid } from "@reduxjs/toolkit";
import { ReactComponent as ArrowDownIcon } from "../../../assets/svg/arrowDown.svg";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../../slices/globalSlice";
import useResizeObserver from "../../../custom-hooks/useResizeObserver";
import { useEffect } from "react";
import useTopDistance from "../../../custom-hooks/useTopDistance";

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

type MenuElement = {
  isSelected: boolean;
  data: {
    id: string;
    menu_name: string;
    categories: string[];
  };
};

const MenuElement = (props: MenuElement) => {
  const {
    isSelected,
    data: { id, menu_name, categories },
  } = props;

  const { setSelectedMenu } = globalActions;
  const dispatch = useDispatch();

  const [menuCategoriesRef, dimensions] = useResizeObserver();
  console.log(dimensions);

  return (
    <>
      <div
        className="flex gap-[16px] cursor-pointer"
        onClick={() => dispatch(setSelectedMenu(id))}
      >
        <ArrowDownIcon
          className={`${isSelected ? "rotate-0" : "rotate-[-90deg]"}`}
        />
        <h1 className="font-[700]">{menu_name}</h1>
      </div>
      <div
        className="overflow-hidden transition-all duration-200"
        style={{
          height: isSelected ? dimensions.height + 30 + "px" : 0,
        }}
      >
        <div
          ref={menuCategoriesRef}
          className="flex flex-col gap-[10px] ml-[40px]  my-[15px]"
        >
          {categories.map((category: any) => {
            const { category_name } = category;
            return (
              <div className="cursor-pointer whitespace-nowrap">
                {category_name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const Menu = () => {
  const { selected } = useSelector((state: any) => state.page.menu);
  return (
    <>
      <div className="flex flex-col">
        {menu.map((menuEl: any) => {
          const { id } = menuEl;
          const isSelected = selected === id;
          return <MenuElement key={id} data={menuEl} isSelected={isSelected} />;
        })}
      </div>
    </>
  );
};

type MenuMobileCategory = {
  id: string;
  name: string;
};

export const MenuMobile = () => {
  const { selected, selectedCategory } = useSelector(
    (state: any) => state.page.menu
  );
  const { setSelectedMenu, setSelectedCategory } = globalActions;
  const dispatch = useDispatch();

  const menus = menu.map((menuEl) => ({
    id: menuEl.id,
    menu_name: menuEl.menu_name,
  }));

  useEffect(() => {
    dispatch(setSelectedMenu(menus[0].id));
  }, []);

  const selectedMenuCategories = menu
    .find((menuEl) => menuEl.id === selected)
    ?.categories.map((category) => ({
      id: category.id,
      name: category.category_name,
    }));

  const [menuCategoriesRef, topDistance] = useTopDistance();

  return (
    <>
      <div className="flex gap-[30px] overflow-x-auto pb-[15px]">
        {menus.map((menuEl) => {
          const { menu_name, id } = menuEl;
          return (
            <button onClick={() => dispatch(setSelectedMenu(id))} key={id}>
              {menu_name}
            </button>
          );
        })}
      </div>
      <div className="sticky top-0 left-0 w-full bg-[#fff] z-[50]">
        <div ref={menuCategoriesRef} className="flex gap-[10px] py-[10px]">
          {selectedMenuCategories?.map((category: MenuMobileCategory) => {
            const { id, name } = category;
            return (
              <div
                onClick={() => dispatch(setSelectedCategory(id))}
                className={`px-[15px] py-[5px] rounded-[6px] border cursor-pointer ${
                  selectedCategory === id
                    ? "border-[2px] border-neutral-600"
                    : ""
                }`}
                key={id}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
