import React from "react";
import styles from "./ProductBlock.module.css";
import breadcrumbs from "./breadcrumbs.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import buttonUp from "./buttonUp.svg";
import shoesMain from "./shoesMain.webp";
import ruler from "./ruler.svg";
import buttonDown from "./buttonDown.svg";
// import images from "../ProductBlock/"
import help from "./help.jpg";
// import img1 from "./1.jpg";
// import img2 from "./2.jpg";
// import img3 from "./3.jpg";
// import img4 from "./4.jpg";
// import img5 from "./5.jpg";

function ProductBlock({ id, color, name, article, price, sizes, images}) {
  // const sizes = item.sizes
  // console.log(image)
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
          <div className={styles.imageSelect}>
            <img src={buttonUp} className={styles.buttonUp} alt="" />
            {images?.map((image, index) => (
               <img src={`/images/${id}/${image}.jpg`} key={index} width={60} height={60} className={styles.select} alt="" />
            ))}
            <img src={buttonDown} className={styles.buttonDown} alt=""  />
          </div>
          <div className={styles.imageMain}>
            <img src={shoesMain} alt="" width={500} height={390} />
          </div>
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
                      <img src={help} alt="" width={899} height={294}/>
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
