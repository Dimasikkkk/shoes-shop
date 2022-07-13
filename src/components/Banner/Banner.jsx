import React from "react";
import banner from "./banner.jpg"
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="" weight={1200} height={186} />
    </div>
  );
};

export default Banner;
