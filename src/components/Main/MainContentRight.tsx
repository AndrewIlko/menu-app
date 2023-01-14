import MenuDescription from "./MenuDescription";
import MenuSearch from "./MenuSearch";
import VenueInformation from "./VenueInformation";

const MainContentRight = (): JSX.Element => {
  return (
    <>
      <div className="w-[272px] max-h-[calc(100vh-80px)] sticky top-20 py-6">
        <MenuSearch />
        <MenuDescription />
        <VenueInformation />
        <div className="text-sm mt-[28px]">
          Дорогі Гості, зверніть будь-ласка увагу на те що до кожної страви
          додється вартість пакування автоматично при формуванні замовлення, але
          нажаль це не працює з піцою , тому слід додавати до кожної піци
          залежно від розміру 7/ 9/ 12 грн.
        </div>
      </div>
    </>
  );
};

export default MainContentRight;
