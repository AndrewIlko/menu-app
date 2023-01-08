import SideBarBtn from "../Header/SideBarBtn";
import Basket from "./Basket";
import LanguagesSelect from "./LanguagesSelect";

const Navbar = (): JSX.Element => {
  return (
    <>
      <nav className="h-12 flex gap-2">
        <Basket />
        <LanguagesSelect />
        <SideBarBtn />
      </nav>
    </>
  );
};

export default Navbar;
