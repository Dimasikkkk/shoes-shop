import React, { useState } from "react";
import styles from "./ProductBlock.module.css";
import breadcrumbs from "./breadcrumbs.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
// import buttonUp from "./buttonUp.svg";
// import shoesMain from "./shoesMain.webp";
import ruler from "./ruler.svg";
// import buttonDown from "./buttonDown.svg";
// import images from "../ProductBlock/"
import help from "./help.jpg";
// import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";
// import ImageSlider from "../ImageSlider";
// import img1 from "./1.jpg";
// import img2 from "./2.jpg";
// import img3 from "./3.jpg";
// import img4 from "./4.jpg";
// import img5 from "./5.jpg";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Thumbs } from "swiper";


export function ProductBlock({ id, color, name, article, price, sizes, images }) {
  // const sizes = item.sizes
  // console.log(images.length)
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // images?.map((image) => ({
  //   original: `${image}=w1024`,
  //   thumbnail: `${image}=w100`
  // }))



  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <ul className={styles.breadcrumbsLink}>
          <li className={styles.breadcrumbsItem}>Католог</li>
          <img src={breadcrumbs} alt="" width={6} height={19} />
          <li className={styles.breadcrumbsItem}>Кроссовки</li>
          <img src={breadcrumbs} alt="" width={6} height={19} />
          <li className={styles.breadcrumbsItem}>adidas Originals</li>
          <img src={breadcrumbs} alt="" width={6} height={19} />
          <li className={styles.breadcrumbsItem}>Addidas Originals Ozweego</li>
        </ul>
      </div>
      <div className={styles.productInfo}>
          <div className={styles.productImage}>


          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {images?.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} key={index} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>


          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={15}
            slidesPerView={4}
            updateOnWindowResize
            observer
            observeParents
            freeMode={true}
            initialSlide={2}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs, Pagination, Scrollbar, A11y, Controller]}
            className="mySwiper"
          >
            {images?.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} key={index} alt="" width={70} height={70} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.productDetails}>
          <h1>{name}</h1>
          <span className={styles.article}>Арт. {article}</span>
          <span className={styles.color}>Цвет: {color}</span>
          <span className={styles.price}>{price} руб.</span>
          <div className={styles.productSizes}>
            <div className={styles.scaleSwitcher}>
              <span>Выбери размер</span>
              <span className={styles.sizeSwitch}>RUS</span>
              <Popup
                trigger={
                  <div className={styles.sizeModal}>
                    <img src={ruler} alt="" />
                    <span>Подобрать размер</span>
                  </div>
                }
                modal
                nested
              >
                {(close) => (
                  <div className={styles.modal}>
                    <button className={styles.close} onClick={close}>
                      &times;
                    </button>
                    <div className={styles.content}>
                      <img src={help} alt="" width={899} height={294} />
                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div className={styles.sizeList}>
              {sizes?.map((size, index) => (
                <button key={index} className={styles.switcher}>
                  {size}
                </button>
              ))}
            </div>
            <button className={styles.sendWhatsApp}>
              <a href="/sdsd">Написать в WhatsApp</a>
            </button>
            <button className={styles.sendTelegram}>
              <a href="/sdsds">Написать в Telegram</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBlock;
