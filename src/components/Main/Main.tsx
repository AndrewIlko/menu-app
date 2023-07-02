import Container from "../Container";
import MainSlide from "../MainSlide";
import MainContent from "./MainContent";

const Main = (): JSX.Element => {
  return (
    <>
      <main className="min-h-[calc(100vh-80px)] h-full ">
        <Container>
          {/* <MainSlide /> */}
          <MainContent />
        </Container>
      </main>
    </>
  );
};

export default Main;
