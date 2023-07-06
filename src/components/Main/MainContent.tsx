import useWindowWidth from "../../custom-hooks/useWindowWidth";
import MainContentCenter from "./MainContentCenter";
import MainContentLeft from "./MainContentLeft/MainContentLeft";
import { MenuMobile } from "./MainContentLeft/Menu";
import MainContentRight from "./MainContentRight";

const MainContent = (): JSX.Element => {
  const windowWidth = useWindowWidth();

  if (windowWidth >= 1024) {
    return (
      <>
        <div className="flex flex-1 gap-[30px]">
          <div className="py-[24px]">
            <MainContentLeft />
          </div>
          <div className="py-[24px]">
            <MainContentCenter />
          </div>
          <div className="py-[24px]">
            <MainContentRight />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-1 flex-col pt-[24px]">
        <MenuMobile />
        <div className="flex flex-1 gap-[15px] py-[24px]">
          <MainContentCenter />
          <MainContentRight />
        </div>
      </div>
    </>
  );
};

export default MainContent;
