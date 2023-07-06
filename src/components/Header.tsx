import Container from "./Container";
import Logo from "./Header/Logo";
import Navbar from "./Header/Navbar";
import SideMenu from "./Sidebar/SideMenu";

const Header = (): JSX.Element => {
  return (
    <>
      <header className="w-full h-20 flex bg-white">
        <Container>
          <div className="flex justify-between items-center h-full">
            <Logo />
            <Navbar />
          </div>
        </Container>
      </header>
      <SideMenu />
    </>
  );
};

export default Header;
