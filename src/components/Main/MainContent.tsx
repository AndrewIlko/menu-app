import MainContentCenter from "./MainContentCenter";
import MainContentLeft from "./MainContentLeft";
import MainContentRight from "./MainContentRight";

const MainContent = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-1 ">
        <MainContentLeft />
        <MainContentCenter />
        <MainContentRight />
      </div>
    </>
  );
};

export default MainContent;
