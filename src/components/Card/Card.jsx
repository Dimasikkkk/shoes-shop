import React from "react";
import styles from "./Card.module.css";
// import search from "./search.svg";
// import remove from "./btn-remove.svg";
// import shoesImage from "./adidas-ozweego.webp";
import { Link } from "react-router-dom";

export const Card = ({ name, price, id, imageUrl }) => {
  // console.log(id);
  return (
          <div className={styles.card} key={id}>
            <Link key={id} to={`/shoes/${id}`}>
              <img
                src={imageUrl}
                className={styles.shoesImg}
                alt=""
              />
              <h5>{name}</h5>
              <span className={styles.price}>{price} руб.</span>
            </Link>
          </div>
  );
};

export default Card;
