import Container from "./Container";
import Logo from "./Header/Logo";
import Navbar from "./Header/Navbar";
import SideMenu from "./SideMenu";

const Header = (): JSX.Element => {
  return (
    <>
      <header className="w-full">
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
