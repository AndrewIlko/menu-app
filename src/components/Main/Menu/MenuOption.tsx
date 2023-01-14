import { Link } from "react-scroll";

const MenuOption = ({ children }: { children: string }) => {
  return (
    <>
      <li className="py-2 text-sm font-bold pl-5 cursor-pointer">
        <Link to={children} smooth={true} duration={300}>
          {children}
        </Link>
      </li>
    </>
  );
};

export default MenuOption;
