import MainContentCenter from "./MainContentCenter";
import MainContentLeft from "./MainContentLeft/MainContentLeft";
import MainContentRight from "./MainContentRight";

const MainContent = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-1 gap-[30px]">
        <MainContentLeft />
        <MainContentCenter />
        <MainContentRight />
      </div>
    </>
  );
};

export default MainContent;
