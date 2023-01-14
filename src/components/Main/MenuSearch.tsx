const MenuSearch = (): JSX.Element => {
  return (
    <>
      <div className="w-full">
        <div className="text-[#828282] text-sm font-semibold mb-1">
          Menu search
        </div>
        <input
          type={"text"}
          className="pl-4 pr-[46px] border shadow-sm w-full outline-red-600 hover:border-red-500 transition duration-200 h-14 rounded-lg "
          placeholder="Dish name"
        />
      </div>
    </>
  );
};

export default MenuSearch;
