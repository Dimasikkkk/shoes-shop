

import { useSwiper } from "swiper/react";

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return <button className="swiper-button-prev-uniq" onClick={() => swiper.slideNext()}></button>;
};

export default SwiperButtonNext;