const MenuOption = ({ children }: { children: string }) => {
  return (
    <>
      <li className="py-2 text-sm font-bold pl-5">{children}</li>
    </>
  );
};

export default MenuOption;
