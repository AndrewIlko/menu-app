import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import pic1 from "../images/4000.webp";

const MainSlide = (): JSX.Element => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-[429px]"
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={2500}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide style={{ backgroundImage: `url(${pic1})` }} />
      </Swiper>
    </>
  );
};

export default MainSlide;
