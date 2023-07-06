import MenuDescription from "./MenuDescription";
import MenuSearch from "./MenuSearch";
import VenueInformation from "./VenueInformation";

const MainContentRight = (): JSX.Element => {
  return (
    <>
      <div className="max-w-[272px] lg:min-w-[225px] w-full sticky top-[82px] lg:top-[24px] h-fit">
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
